import React, {Component} from 'react';

function Audio(){	
	return(
		<div className="col">
			<audio ref="audRef" src={props.song} type="audio/mp3"></audio>
			<button onClick={props.playAudio}>Play!</button>
			<button onClick={props.pauseAudio}>Pause!</button>
		</div>
	)
	
}

export default Audio;