import React, { memo, Suspense } from 'react';
import { Provider } from "react-redux";

import store from "@/store";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router";

// components
import RocAppHeader from "components/app-header";
import RocAppFooter from "components/app-footer";
import RocPlayerBar from "@/pages/player/player-bar";

export default memo(function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<RocAppHeader />
				{/* 路由懒加载 */}
				<Suspense fallback={<div>Loading...</div>}>
					{
						renderRoutes(routes)
					}
				</Suspense>
				<RocAppFooter />
				<RocPlayerBar />
			</HashRouter>
		</Provider >
	)
})
