import React, { memo, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSizeImage } from "@/utils/format-utils";

import { getNewAlbumDataAction } from "../../store/action";
import { Carousel } from 'antd';
import {
	LeftOutlined,
	RightOutlined
} from '@ant-design/icons';

import RocRcmHeader from "components/rcm-header";

// 样式
import { StyleRcmAlbum } from "./styled";


export default memo(function RocRcmAlbum(props) {


	const { newAlbum } = useSelector(state => {
		return {
			newAlbum: state.getIn(["recommend", "newAlbum"])
		}
	})
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getNewAlbumDataAction(10))
	}, [dispatch])

	// 轮播图res
	const bannerNewRef = useRef();
	function handlePrev() {
		bannerNewRef.current.prev()
	}
	function handleNext() {
		bannerNewRef.current.next()
	}

	return (
		<StyleRcmAlbum>
			{/* 头部 */}
			<RocRcmHeader {...props} title="新碟上架" linkUrl="/discover/album" />
			{/* 内容 */}
			<div className="new-album-wrap">
				<div className="new-album-box">
					<Carousel className="banner-main" ref={bannerNewRef} autoplay>
						{
							// 遍历轮播图
							newAlbum.map((bannerItem, index) => {
								return (
									<div key={index}>
										<div className="banner-item">
											{
												// 遍历每一张轮播图中的新碟数据
												bannerItem.map(item => {
													return (
														<div key={item.id} className="banner-item-item sprite_02">
															<span className="mask sprite_covor"></span>
															<img src={getSizeImage(item.blurPicUrl, 100)} alt="" />
															<p className="name text-nowrap">{item.name}</p>
															<p className="artist-name text-nowrap">{item.artist.name}</p>
														</div>
													)
												})
											}
										</div>
									</div>
								)
							})
						}
					</Carousel>
					<LeftOutlined onClick={e => handlePrev()} className="icon-left" />
					<RightOutlined onClick={e => handleNext()} className="icon-right" />
				</div>
			</div>
		</StyleRcmAlbum>
	)
})
