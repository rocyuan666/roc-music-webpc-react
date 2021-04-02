import styled from "styled-components";

export const StyledRcmHeader = styled.div`
	/* 标题 */
	.hot-rc-header{
		display: flex;
		height: 33px;
		padding: 0 10px 0 34px;
		background-position: -225px -156px;
		border-bottom: 2px solid #C10D0C;
		line-height: 28px;
		.hot-rc-title{
			font-size: 20px;
		}
		.nav-list-box{
			margin-left: 20px;
			.nav-item{
				.btn-item{
					cursor: pointer;
					color: #666;
					&:hover{
						text-decoration: underline;
					}
				}
				.line{
					color: #ccc;
					margin: 0 10px;
				}
			}
		}
		.more{
			cursor: pointer;
			margin-left: auto;
			padding-right: 20px;
			color: #666;
			background-position: 24px -232px;
			&:hover{
				text-decoration: underline;
			}
		}
	}
`