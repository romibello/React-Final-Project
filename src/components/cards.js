import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


class Cards extends Component{

	render(){
		const mySearch = this.props.searchResult.map((item,i)=>{
			return(
				<div className="col-sm-6 " key={i}>
					<Link to={ {pathname: this.props.direc, state: { artistId: item.id, artistImg: item.img, artistName: item.name, artisGenre: item.genres }} }>
					<div className="card shadow p-3 mb-5 bg-white rounded" >
						<div className="row">
							<div className="col">
								<img src={item.img} alt="img" className="img-fluid"></img>
							</div>
							<div className="text-center col-6">
								<h4>{item.name}</h4>
								<p>{item.release}</p>
							</div>
						</div>
					</div>
					</Link>
				</div>
			)
		});
		return (
			<div className="row">
				{mySearch}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	  textToSearch: state.textToSearch,
	  searchResult: state.searchResult,
	  direc: state.direc
	}
}


export default connect(mapStateToProps, null)(Cards);