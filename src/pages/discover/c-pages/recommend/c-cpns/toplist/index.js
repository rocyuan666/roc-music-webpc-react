// libs & utils
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopListDataAction, getTopListDetailDataAction } from "../../store/action";

// components
import RocRcmHeader from "@/components/rcm-header";
import RocToplistContItem from "./c-cpns/toplist-cont-item";

// styles
import { StyledToplist } from "./styled";

export default memo(function RocToplist(props) {

	// redux
	const { topList, upRanking, newRanking, originRanking } = useSelector(state => {
		return {
			topList: state.getIn(["recommend", "topList"]),
			upRanking: state.getIn(["recommend", "upRanking"]),
			newRanking: state.getIn(["recommend", "newRanking"]),
			originRanking: state.getIn(["recommend", "originRanking"])
		}
	}, shallowEqual)
	const dispatch = useDispatch()
	// 排行榜
	useEffect(() => {
		dispatch(getTopListDataAction())
	}, [dispatch])
	// 排行榜详情
	useEffect(() => {
		for(let i = 0; i < topList.length; i++){
			dispatch(getTopListDetailDataAction(topList[i].id,i))
		}
	}, [dispatch, topList])

	return (
		<StyledToplist>
			{/* 标题 */}
			<RocRcmHeader {...props} title="榜单" linkUrl="/discover/ranking" />
			{/* 内容 */}
			<div className="toplist-wrap">
				<RocToplistContItem itemInfo={upRanking} />
				<RocToplistContItem itemInfo={newRanking} />
				<RocToplistContItem itemInfo={originRanking} />
			</div>
		</StyledToplist>
	)
})
