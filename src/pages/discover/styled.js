import styled from "styled-components";

export const StyledDiscoverNavWrap = styled.div`
	height: 30px;
	box-sizing: border-box;
	background-color: #C20C0C;
	border-bottom: 1px solid #a40011;
	.nav-cont{
		height: 100%;
		.btn-nav-wrap{
			display: flex;
			padding-left: 180px;
			padding-top: 2px;
			.btn-nav-item{
				margin:0 16px;
				.btn-link{
					display: block;
					color: #fff;
					padding: 0 13px;
					height: 20px;
					line-height: 20px;
					border-radius: 10px;
					transition: all .2s;
					&.active{
						background: #9B0909;
					}
					&:hover{
						background: #9B0909;
						text-decoration: none;
					}
				}
			}
		}
	}
`