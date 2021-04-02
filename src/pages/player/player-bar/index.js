// libs
import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import { Slider } from 'antd';
import classNames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPlaySong, formatDate } from "@/utils/format-utils";

import { getCurrentSongData } from "../store/action";

// style
import { StyledPlayerBar } from "./styled";

export default memo(function RocPlayerBar() {
	// state & props
	const [currentTime, setCurrentTime] = useState(0)
	const [progress, setProgress] = useState(0)
	const [isShouDong, setIsShouDong] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	// hook
	// 获取redux数据
	const currentSong = useSelector(state => {
		return state.getIn(["player", "currentSong"])
	}, shallowEqual)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCurrentSongData(167876))
	}, [dispatch])

	useEffect(() => {
		audioRef.current.src = getPlaySong(currentSong.id)
	}, [currentSong])
	
	// 其他值设置
	const picUrl = currentSong && currentSong.al && currentSong.al.picUrl;
	const musicName = currentSong && currentSong.name;
	const name = currentSong && currentSong.ar && currentSong.ar[0].name;
	const duration = currentSong && currentSong.dt;

	const audioRef = useRef()
	const handleSongMusic = () => {
		// 播放暂停音乐
		isPlaying ? audioRef.current.pause() : audioRef.current.play()
		setIsPlaying(!isPlaying)
	}
	const timeUpdate = (e) => {
		const currentTime = e.target.currentTime;
		if(!isShouDong){
			setCurrentTime(currentTime * 1000)
			setProgress(currentTime * 1000 / currentSong.dt * 100)
		}
	}

	// slider滑动中...
	const changeSlider = useCallback((value) => {
		setIsShouDong(true)
		// 拖动修改进度 与 当前时间
		setProgress(value)
		const currentTime = value / 100 * duration;
		setCurrentTime(currentTime)
	}, [duration])

	// slider滑动结束松手
	const changeEndSlider = useCallback((value) => {
		// 拖动停止后音乐播放到该位置，设置当前播放时间的位置
		const currentTime = value / 100 * duration / 1000;
		audioRef.current.currentTime = currentTime;
		setCurrentTime(currentTime * 1000)
		setIsShouDong(false)
	}, [duration])

	return (
		<StyledPlayerBar>
			<div className="player-bar-wrap sprite_player">
				<div className="lock-box sprite_player">
					<span className="btn-lock sprite_player">锁定/解锁</span>
				</div>
				{/* 播放器 */}
				<div className="player-bar-cont wrap-v2">
					{/* 左 */}
					<div className="player-bar-l">
						<span className="prev-play sprite_player" title="上一首"></span>
						<span className={"stop-play sprite_player " + classNames({stop: isPlaying})} title="播放/暂停" onClick={handleSongMusic}></span>
						<span className="next-play sprite_player" title="下一首"></span>
					</div>
					{/* 中 */}
					<div className="player-bar-c">
						<div className="img-box">
							<span className="mask sprite_player">玻璃遮罩</span>
							<img src={picUrl + "?param=34y34"} alt="" />
						</div>
						<div className="info-box">
							<div className="info-text">
								<p className="name text-nowrap">{musicName}</p>
								<p className="icon-mv sprite_player" title="MV">mv图标</p>
								<p className="author-name">{name}</p>
								<p className="come-list sprite_player" title="来自榜单">来自榜单图标</p>
							</div>
							<div className="slider-box">
								<Slider className="slider-dom" tooltipVisible={false} value={progress} onChange={changeSlider} onAfterChange={changeEndSlider} />
								<p className="time"><span>{formatDate(currentTime, "mm:ss")}</span> / {formatDate(duration, "mm:ss")}</p>
							</div>
						</div>
					</div>
					{/* 右 */}
					<div className="player-bar-r">
						<div className="bar-r-1">
							<span className="icon-coll sprite_player" title="收藏"></span>
							<span className="icon-share sprite_player" title="分享"></span>
						</div>
						<div className="bar-r-2 sprite_player">
							<span className="icon-sound sprite_player" title="音量"></span>
							<span className="icon-pattern sprite_player" title="循环"></span>
							<span className="icon-playlist text-nowrap sprite_player" title="播放列表">1234</span>
						</div>
					</div>
				</div>
			</div>
			<audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} />
		</StyledPlayerBar>
	)
})
