import styled from "styled-components";
import sprite_footer_03 from "@/assets/img/sprite_footer_03.png";

export const StyledAppFooterWrap = styled.div`
	height: 172px;
	overflow: hidden;
	border-top: 1px solid #d3d3d3;
	background: #f2f2f2;
	.footer-wrap{
		display: flex;
		justify-content: space-between;
		height: 100%;
		.footer-left{
			width: 520px;
			padding-top: 15px;
			color: #666;
			line-height: 24px;
			.btn-link{
				color: #999;
			}
			.line{
				margin: 0 8px 0 10px;
				color: #c2c2c2;
			}
		}
		.footer-right{
			width: 420px;
			margin-top: 33px;
			display: flex;
			.footer-right-item{
				flex: 1;
				a{
					display: block;
					width: 50px;
					height: 45px;
					margin: 0 auto;
					background: url(${sprite_footer_03}) no-repeat 0 99999px;
					background-size: 110px 552px;
				}
				p{
					color: #999;
					line-height: 24px;
					text-align: center;
				}
				&:nth-of-type(1){
					a{
						background-position: -63px -456.5px;
					}
				}
				&:nth-of-type(2){
					a{
						background-position: -63px -101px;
					}
				}
				&:nth-of-type(3){
					a{
						background-position: 0 0;
					}
				}
				&:nth-of-type(4){
					a{
						background-position: -60px -50px;
					}
				}
				&:nth-of-type(5){
					a{
						background-position: 0 -101px;
					}
				}
			}
		}
	}
`