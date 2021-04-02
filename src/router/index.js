import { lazy } from "react";
import { Redirect } from "react-router-dom";


// 懒加载
const RocDiscover = lazy(() => import("@/pages/discover"));
const RocFriend = lazy(() => import("@/pages/friend"));
const RocMy = lazy(() => import("@/pages/my-music"));

const RocRecommend = lazy(() => import("@/pages/discover/c-pages/recommend"));
const RocAlbum = lazy(() => import("@/pages/discover/c-pages/album"));
const RocArtist = lazy(() => import("@/pages/discover/c-pages/artist"));
const RocDjradio = lazy(() => import("@/pages/discover/c-pages/djradio"));
const RocRanking = lazy(() => import("@/pages/discover/c-pages/ranking"));
const RocSongs = lazy(() => import("@/pages/discover/c-pages/songs"));

const RocPlaylist = lazy(() => import("@/pages/discover/c-pages/playlist"));


// import RocDiscover from "@/pages/discover";
// import RocFriend from "@/pages/friend";
// import RocMy from "@/pages/my-music";

// // 发现音乐 子路由组件
// import RocRecommend from "@/pages/discover/c-pages/recommend";
// import RocAlbum from "@/pages/discover/c-pages/album";
// import RocArtist from "@/pages/discover/c-pages/artist";
// import RocDjradio from "@/pages/discover/c-pages/djradio";
// import RocRanking from "@/pages/discover/c-pages/ranking";
// import RocSongs from "@/pages/discover/c-pages/songs";

// import RocPlaylist from "@/pages/discover/c-pages/playlist";

const routes = [
	{
		path: "/",
		exact: true,
		render: () => (
			<Redirect to="/discover" />
		)
	},
	{
		path: "/discover",
		component: RocDiscover,
		routes: [
			{
				path: "/discover",
				exact: true,
				render: () => (
					<Redirect to="/discover/recommend" />
				)
			},
			{
				path: "/discover/recommend",
				component: RocRecommend
			},
			{
				path: "/discover/album",
				component: RocAlbum
			},
			{
				path: "/discover/artist",
				component: RocArtist
			},
			{
				path: "/discover/djradio",
				component: RocDjradio
			},
			{
				path: "/discover/ranking",
				component: RocRanking
			},
			{
				path: "/discover/songs",
				component: RocSongs
			},
			{
				path: "/discover/playlist",
				component: RocPlaylist
			},
		]
	},
	{
		path: "/friend",
		exact: true,
		component: RocFriend
	},
	{
		path: "/my",
		exact: true,
		component: RocMy
	}
]
export default routes;