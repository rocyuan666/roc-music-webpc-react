import { CHANGE_CURRENT_SONG } from "./const";

import { request } from "@/network/request";
import api from "@/network/api";

export function changeCurrentSong(currentSong) {
	return {
		type: CHANGE_CURRENT_SONG,
		currentSong
	}
}

export function getCurrentSongData(ids) {
	return dispatch => {
		request({
			url: api.songDetail + "?ids="+ids
		}).then(res => {
			dispatch(changeCurrentSong(res.songs[0]))
		})
	}
}
