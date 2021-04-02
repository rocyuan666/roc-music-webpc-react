import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSizeImage, getCount } from "@/utils/format-utils";

// 组件
import { getHotRecommendDataAction } from "../../store/action";
import RocRcmHeader from "components/rcm-header";

// 样式
import { StyledHotRecommendWrap } from "./styled";

export default memo(function RocHotRecommend(props) {

	// 组件与redux联系
	const dispatch = useDispatch()
	const { hotRecommend } = useSelector(state => {
		return {
			hotRecommend: state.getIn(["recommend", "hotRecommend"])
		}
	}, shallowEqual)
	useEffect(() => {
		dispatch(getHotRecommendDataAction(8))
	}, [dispatch])


	// 跳转歌单播放列表页
	function toPlaylistPage(id) {
		props.history.push({
			pathname: "/discover/playlist",
			query: {
				id
			}
		})
	}

	return (
		<StyledHotRecommendWrap>
			{/* 头部 */}
			<RocRcmHeader {...props}
				title="热门推荐"
				navList={["华语", "流行", "摇滚", "民谣", "电子"]}
				linkUrl="/discover/songs"
			/>
			{/* 推荐歌单列表 */}
			<div className="hot-rc-list">
				{
					hotRecommend.map(item => {
						return (
							<div key={item.id} className="hot-rc-item">
								<div className="img-box">
									<img src={getSizeImage(item.picUrl, 140)} alt="" />
									<div className="mask sprite_covor" onClick={e => toPlaylistPage(item.id)}></div>
									<div className="bottom sprite_covor">
										<div className="play-num">
											<span className="icon-headset sprite_icon"></span>
											<span>{getCount(item.playCount)}</span>
										</div>
										<div className="btn-play sprite_icon"></div>
									</div>
								</div>
								<p className="hot-rc-name" onClick={e => toPlaylistPage(item.id)}>{item.name}</p>
							</div>
						)
					})
				}
			</div>
		</StyledHotRecommendWrap>
	)
})
