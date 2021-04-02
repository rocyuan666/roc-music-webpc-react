import { Map } from "immutable";

import { CHANGE_CURRENT_SONG } from "./const";

const initState = Map({
	currentSong: {}
})

function reducer(state = initState, action) {
	switch(action.type) {
		case CHANGE_CURRENT_SONG:
			return state.set("currentSong", action.currentSong)
		default:
			return state
	}
}

export default reducer;