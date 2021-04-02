import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import { Carousel } from 'antd';
import {
	LeftCircleOutlined,
	RightCircleOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getBannerDataAction } from "../../store/action";

// 样式
import { StyledBannerWrap } from './styled';

function RocBanner() {

	// 组件与redux联系 redux Hook应用
	const { banners } = useSelector(state => {
		return {
			// banners: state.get("recommend").get("banners")
			banners: state.getIn(["recommend", "banners"])
		}
	}, shallowEqual)
	const dispatch = useDispatch()

	// redux thunk 请求banner数据
	useEffect(() => {
		dispatch(getBannerDataAction())
	}, [dispatch])

	// 轮播图res
	const bannerRef = useRef();
	function handlePrev() {
		bannerRef.current.prev()
	}
	function handleNext() {
		bannerRef.current.next()
	}

	// 背景图
	const [current, setcurrent] = useState(0)
	const bannerShowCounter = useCallback(
		(from, to) => {
			setcurrent(to)
		},
		[],
	)
	const bgImg = banners[current] && banners[current].imageUrl + "?imageView&blur=40x20";
	return (
		<StyledBannerWrap bgImg={bgImg}>
			{/* 背景图模糊 css实现 */}
			{/* <StyledBannerBgImg bgImg={bgImg} /> */}
			<div className="top-banner-wrap">
				<div className="cont-banner wrap-v2">
					<Carousel className="banner"
						ref={bannerRef}
						autoplay
						beforeChange={bannerShowCounter}
						effect="fade">
						{
							banners.map(item => {
								return (
									<div className="banner-item" key={item.encodeId}>
										<img src={item.imageUrl} alt="" />
									</div>
								)
							})
						}
					</Carousel>
					<div className="download-img">
						<span className="btn-download"></span>
						<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
					</div>
					<LeftCircleOutlined onClick={e => handlePrev()} className="icon-left" />
					<RightCircleOutlined onClick={e => handleNext()} className="icon-right" />
				</div>
			</div>
		</StyledBannerWrap>
	)
}

export default memo(RocBanner)