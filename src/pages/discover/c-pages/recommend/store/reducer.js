import { Map } from "immutable";

import {
	CHANGE_BANNER,
	CHANGE_HOT_RECOMMEND,
	CHANGE_NEW_ALBUM,

	CHANGE_TOP_LIST,
	CHANGE_UP_RANKING,
	CHANGE_NEW_RANKING,
	CHANGE_ORIGIN_RANKING
} from "./const";


const initState = Map({
	banners: [],
	hotRecommend: [],
	newAlbum: [],

	topList: [],
	upRanking: {},
  newRanking: {},
  originRanking: {},
})

function reducer(state = initState, action) {
	switch(action.type) {
		case CHANGE_BANNER:
			return state.set("banners",action.banners);
		case CHANGE_HOT_RECOMMEND:
			return state.set("hotRecommend", action.hotRecommend)
		case CHANGE_NEW_ALBUM:
			return state.set("newAlbum", action.newAlbum)

		case CHANGE_TOP_LIST:
			return state.set("topList", action.topList)
		case CHANGE_UP_RANKING:
			return state.set("upRanking", action.upRanking)
		case CHANGE_NEW_RANKING:
			return state.set("newRanking", action.newRanking)
		case CHANGE_ORIGIN_RANKING:
			return state.set("originRanking", action.originRanking)
		default:
			return state;
	}
}

export default reducer;