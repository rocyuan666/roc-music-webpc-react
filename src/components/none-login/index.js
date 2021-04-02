import React, { memo } from 'react'

// 样式
import {
	StyledNoneLoginWrap
} from "./styled";

export default memo(function RocNoneLogin(props) {

	// 判断显示 未登录页面结构
	function noneLoginType() {
		if (props.type === "friend") {
			return (
				<div className="bg-img-friend">
					<p className="login-text">你可以关注明星和好友品味他们的私房歌单<br />通过他们的动态发现更多精彩音乐</p>
					<span className="btn-login"></span>
				</div>
			)
		} else if (props.type === "my") {
			return (
				<div className="bg-img-my">
					<span className="btn-login"></span>
				</div>
			)
		}else{
			return <p>无内容</p>
		}

	}

	return (
		<StyledNoneLoginWrap>
			<div className="cont-wrap wrap-v2">
				{ noneLoginType() }
			</div>
		</StyledNoneLoginWrap>
	)
})
