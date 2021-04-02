import React, { memo } from 'react';

// 组件
import RocBanner from "./c-cpns/banner";
import RocHotRecommend from "./c-cpns/hot-recommend";
import RocRcmAlbum from "./c-cpns/rcm-album";
import RocToplist from "./c-cpns/toplist"

// 样式
import { StyledRecommendWrap } from "./styled";

export default memo(function RocRecommend(props) {
	return (
		<StyledRecommendWrap>
			<RocBanner />
			<div className="recommend-main wrap-v2">
				<div className="main-l">
					<RocHotRecommend {...props} />
					<RocRcmAlbum {...props} />
					<RocToplist {...props} />
				</div>
				<div className="main-r">
					<h2>right-cont</h2>
				</div>
			</div>

		</StyledRecommendWrap>
	)
})
