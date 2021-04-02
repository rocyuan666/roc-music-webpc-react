import React, { memo } from 'react'

export default memo(function RocPlaylist(props) {
	console.log(props)
	return (
		<div>
			歌单列表id：{props.location.query.id}
		</div>
	)
})
