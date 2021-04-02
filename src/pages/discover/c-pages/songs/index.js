import React, { memo } from 'react'

export default memo(function RocSongs(props) {
	return (
		<div>
			歌单分类：{props.location.query && props.location.query.type ? props.location.query.type : "全部"}
		</div>
	)
})
