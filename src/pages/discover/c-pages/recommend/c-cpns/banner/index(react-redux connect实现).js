import React, { memo, useRef, useEffect } from 'react';
import { Carousel } from 'antd';
import {
	LeftCircleOutlined,
	RightCircleOutlined
} from '@ant-design/icons';
import { connect } from "react-redux";

import { getBannerDataAction } from "../../store/action";

// 样式
import { StyledBannerWrap } from './styled';

function RocBanner(props) {
	const { getBannerDataList, banners } = props;

	useEffect(() => {
		// 获取banner数据
		getBannerDataList()
	}, [getBannerDataList])

	// 轮播图res
	const bannerRef = useRef();
	// 轮播图上一个
	function handlePrev() {
		bannerRef.current.prev()
	}
	// 轮播图下一个
	function handleNext() {
		bannerRef.current.next()
	}
	return (
		<StyledBannerWrap>
			<div className="top-banner-wrap">
				<div className="cont-banner wrap-v2">
					<Carousel className="banner"  ref={bannerRef}>
						{
							banners.map(item => {
								return (
									<div className="banner-item" key={item.encodeId}>
										<img src={item.imageUrl} alt=""/>
									</div>
								)
							})
						}
					</Carousel>
					<div className="download-img">
						<span className="btn-download"></span>
					</div>
					<LeftCircleOutlined onClick={e => handlePrev()} className="icon-left" />
					<RightCircleOutlined onClick={e => handleNext()} className="icon-right" />
				</div>
			</div>
		</StyledBannerWrap>
	)
}

const mapStateToProps = state => {
	return {
		banners: state.recommend.banners
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getBannerDataList() {
			dispatch(getBannerDataAction())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(RocBanner))