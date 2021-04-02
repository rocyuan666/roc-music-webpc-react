import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
// 公共数据
import { headerLinks } from "@/common/local-data";

// 样式
import { StyledAppHeaderWrap } from "./styled";

export default memo(function RocAppHeader() {
	return (
		<StyledAppHeaderWrap>
			<div className="header-wrap wrap-v1">
				<div className="header-l">
					<NavLink className="header-logo sprite_01" to="/" />
					<div className="nav-list">
						{
							headerLinks.map((item, index) => {
								if (index < 3) {
									return (
										<NavLink className="btn-link"
											activeClassName="btn-link-active"
											to={item.link}
											key={index}>
											{item.title}
											<span className="icon-act sprite_01"></span>
										</NavLink>
									)
								} else {
									return (
										<a rel="noreferrer"
											target="_blank"
											className="btn-link"
											href={item.link}
											key={index}>
											{item.title}
										</a>
									)
								}
							})
						}
					</div>
				</div>
				<div className="header-r">
					<input className="sprite_01" type="text" placeholder="音乐/视频/电台/用户" />
					<a className="btn-creator" href="/#">创作者中心</a>
					<a className="btn-login" href="/#">登录</a>
				</div>
			</div>
		</StyledAppHeaderWrap>
	)
})
