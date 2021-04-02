import styled from "styled-components";

import recommend_top_bg from "@/assets/img/recommend-top-bg.png";

export const StyledToplist = styled.div`
	.toplist-wrap{
		display: flex;
		height: 472px;
    margin-top: 20px;
		padding-left: 1px;
		background: url(${recommend_top_bg}) no-repeat;
		background-size: 100% auto;
	}
`