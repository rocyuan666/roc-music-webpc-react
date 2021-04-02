import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from "react-router-dom";

// 本地数据
import { dicoverMenu } from "@/common/local-data";

// 样式
import {
	StyledDiscoverNavWrap
} from "./styled";

export default memo(function RocDiscover(props) {
	const { route } = props;
	return (
		<div>
			<StyledDiscoverNavWrap>
				<div className="nav-cont wrap-v1">
					<div className="btn-nav-wrap">
						{
							dicoverMenu.map((item, index) => {
								return (
									<div className="btn-nav-item" key={index}>
										<NavLink className="btn-link" to={item.link}>{item.title}</NavLink>
									</div>
								)
							})
						}
					</div>
				</div>
			</StyledDiscoverNavWrap>
			{
				renderRoutes(route.routes)
			}
		</div>
	)
})
