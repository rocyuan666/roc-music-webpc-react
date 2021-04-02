import api from "@/network/api";
import { request } from "@/network/request";

import {
	CHANGE_BANNER,
	CHANGE_HOT_RECOMMEND,
	CHANGE_NEW_ALBUM,

	CHANGE_TOP_LIST,
	CHANGE_UP_RANKING,
	CHANGE_NEW_RANKING,
	CHANGE_ORIGIN_RANKING
} from "./const";

export function changeBanner(banners) {
	return {
		type: CHANGE_BANNER,
		banners
	}
}
export function changeHotRecommend(hotRecommend) {
	return {
		type: CHANGE_HOT_RECOMMEND,
		hotRecommend
	}
}
export function changeNewAlbum(newAlbum) {
	return {
		type: CHANGE_NEW_ALBUM,
		newAlbum
	}
}

export function changeTopList(topList) {
	return {
		type: CHANGE_TOP_LIST,
		topList
	}
}
export function changeUpRanking(upRanking) {
	return {
		type: CHANGE_UP_RANKING,
		upRanking
	}
}
export function changeNewRanking(newRanking) {
	return {
		type: CHANGE_NEW_RANKING,
		newRanking
	}
}
export function changeOriginRanking(originRanking) {
	return {
		type: CHANGE_ORIGIN_RANKING,
		originRanking
	}
}

// thunk 函数定义
// 获取banner数据
export function getBannerDataAction() {
	return dispatch => {
		request({
			url: api.banner
		}).then(res => {
			dispatch(changeBanner(res.banners))
		})
	}
}
// 获取热门推荐数据
export function getHotRecommendDataAction(limit) {
	return dispatch => {
		request({
			url: api.personalized,
			params: {
				limit
			}
		}).then(res => {
			dispatch(changeHotRecommend(res.result))
		})
	}
}
// 获取新碟上架数据
export function getNewAlbumDataAction(limit) {
	return dispatch => {
		request({
			url: api.newAlbum,
			params: {
				limit
			}
		}).then(res => {
			// 数据处理
			if (res) {
				const newAlbum = res.weekData.slice(0, 10)
				const newAlbumArr = []
				newAlbumArr.push(newAlbum.slice(0, 5))
				newAlbumArr.push(newAlbum.slice(5, 10))
				dispatch(changeNewAlbum(newAlbumArr))
			}
		})
	}
}
// 请求排行榜列表
export function getTopListDataAction() {
	return dispatch => {
		request({
			url: api.toplist
		}).then(res => {
			const newTopList = res.list.slice(0, 3)

			dispatch(changeTopList(newTopList))
		})
	}
}
export function getTopListDetailDataAction(id, index) {
	return dispatch => {
		request({
			url: api.toplistDetail,
			params: {
				id
			}
		}).then(res => {
			if (res) {
				switch (index) {
					case 0:
						dispatch(changeUpRanking(res.playlist))
						break;
					case 1:
						dispatch(changeNewRanking(res.playlist))
						break;
					case 2:
						dispatch(changeOriginRanking(res.playlist))
						break;
					default:
						console.log("暂无数据")
						break;
				}
			}
		})
	}
}