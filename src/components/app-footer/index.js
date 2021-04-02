import React, { memo } from 'react'

// 公共数据
import { footerLinks, footerImageList } from "@/common/local-data";

// 样式
import { StyledAppFooterWrap } from "./styled";

export default memo(function RocAppFooter() {
	return (
		<StyledAppFooterWrap>
			<div className="footer-wrap wrap-v2">
				<div className="footer-left">
					<p>
						{
							footerLinks.map((item, index) => {
								if (index < 4) {
									return (
										<span key={index}>
											<a className="btn-link" rel="noreferrer" target="_blank" href={item.link}>{item.title}</a>
											<span className="line">|</span>
										</span>
									)
								}else{
									return (
										<span key={index}>
											<a className="btn-link" href={item.link}>{item.title}</a>
											<span className="line">|</span>
										</span>
									)
								}
							})
						}
					</p>
					<p>网易公司版权所有©1997-2021杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
					<p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
					<p>粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</p>
				</div>
				<ul className="footer-right">
					{
						footerImageList.map((item, index) => (
							<li className="footer-right-item" key={index}>
								<a rel="noreferrer" target="_blank" href={item.link}></a>
								<p>{item.title}</p>
							</li>
						))
					}
				</ul>
			</div>
		</StyledAppFooterWrap>
	)
})
