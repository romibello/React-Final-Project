
import React from 'react'


function Track(props) {
	console.log(props);
	function handleFavoriteClick() {
		let trackData = {
		id: props.song.id,
		name: props.song.name,
		/*artist: props.song.artists[0].name*/
		}
		props.onFavoriteClick(trackData);
	}
	let favorite = false;
	let tooltipTitle = '';
	if (props.favorite) {
		favorite = props.favorite;
		tooltipTitle = "Remove from favorites";
	}
	else {
		tooltipTitle = "Add to favorites";
	}
	return(
		<tr>
		<td className="td-name" onClick={()=>{props.onSongClick(props.song.preview)}}>{props.song.name}</td>
		<td className="td-fav text-right">
			<a onClick={handleFavoriteClick} data-toggle="tooltip" data-placement="right" title={tooltipTitle} >
			<i className={`${favorite ? 'fas fa-star' : 'far fa-star'}`}></i>
			</a>
		</td>
		</tr>
	)
}

export default Track;