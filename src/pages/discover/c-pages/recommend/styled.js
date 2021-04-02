import styled from "styled-components";

export const StyledRecommendWrap = styled.div`
	.recommend-main{
		display: flex;
		justify-content: space-between;
		border: 1px solid #d3d3d3;
		border-width: 0 1px;
		background-color: #fff;
		.main-l{
			box-sizing: border-box;
			width: 729px;
			padding: 20px 20px 40px;
		}
		.main-r{
			box-sizing: border-box;
			width: 250px;
			border-left: 1px solid #d3d3d3;
		}
	}
`