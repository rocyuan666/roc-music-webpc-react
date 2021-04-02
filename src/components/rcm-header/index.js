import React, { memo } from 'react';

import { StyledRcmHeader } from "./styled";

export default memo(function RocRcmGeader(props) {
	let { title, navList = [], linkUrl } = props;
	
	// 跳转歌单分类
	function toSongsPage(type) {
		props.history.push({
			pathname: linkUrl,
			query: {
				type
			}
		})
	}
	return (
		<StyledRcmHeader>
			<div className="hot-rc-header sprite_02">
				<span className="hot-rc-title">{title}</span>
				<div className="nav-list-box">
					{
						navList.map((item, index) => {
							return (
								<span className="nav-item" key={item}>
									<span className="btn-item" onClick={e => toSongsPage(item)}>{item}</span>
									<span className="line">{index === navList.length - 1 ? "" : "丨"}</span>
								</span>
							)
						})
					}
				</div>
				<p className="more sprite_02" onClick={e => toSongsPage()}>更多</p>
			</div>
		</StyledRcmHeader>
	)
})
