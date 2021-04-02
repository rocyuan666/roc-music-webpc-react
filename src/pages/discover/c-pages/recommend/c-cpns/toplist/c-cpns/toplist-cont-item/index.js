// libs
import React, { memo } from 'react';
import { getSizeImage } from "@/utils/format-utils";

// components

// style
import { StyledToplistContItem } from "./styled";

export default memo(function RocPlaylistContItem(props) {
	const { itemInfo } = props;
	const { tracks = [] } = itemInfo;
	return (
		<StyledToplistContItem>
			<div className="toplist-item">
				{/* 头部 */}
				<div className="toplist-item-top">
					<div className="left">
						<img src={getSizeImage(itemInfo.coverImgUrl, 80)} alt="" />
					</div>
					<div className="right">
						<h3 className="name text-nowrap">{itemInfo.name}</h3>
						<div className="btn-box">
							<span className="icon-play sprite_02" title="播放"></span>
							<span className="icon-coll sprite_02" title="收藏"></span>
						</div>
					</div>
				</div>
				{/* 内容 */}
				<div className="toplist-item-cont">
					{
						// 遍历排行榜详情歌曲列表
						tracks.slice(0, 10).map((item, index) => {
							return (
								// 每一行
								<div className="item-row" key={item.id}>
									<div className="row-l">
										<span className="num">{index+1}</span>
										<span className="name text-nowrap">{item.name}</span>
									</div>
									<div className="row-r">
										<span className="icon-play sprite_02" title="播放"></span>
										<span className="icon-add sprite_icon2" title="添加到播放列表"></span>
										<span className="icon-coll sprite_02" title="收藏"></span>
									</div>
								</div>
							)
						})
					}
				</div>
				<span className="more">查看全部{">"}</span>
			</div>
		</StyledToplistContItem>
	)
})
