import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';


class List extends Component {
	constructor(props){
		super(props);
		this.state ={
			listArtis:this.props.location.listArtis.artists.items,
		}
	}
    

	render(){
		let optional = "https://t4.ftcdn.net/jpg/01/39/16/63/240_F_139166369_NdTDXc0lM57N66868lC66PpsaMkFSwaf.jpg";
		const mySearch = this.state.listArtis.map((item,i)=>{
			return(
				<div className="col-sm-6 ">
				<div class="card-columns">
					
						<div className="card shadow p-3 mb-5 bg-white rounded" key={i}>
						<Link to={{ pathname:"/artists", artists: item}}>
							<div className="row">
								<div className="col">
									<img src={ item.images.length > 0? item.images[0].url : optional} alt="img" className="img-fluid"></img>
								</div>
								<div className="col-8">
									<h4>{item.name}</h4>
								</div>
							</div>
						</Link>
						</div>
					
					</div>
				</div>
			)
		});

		return(
			<div className="container">
				<div className="row">
				{mySearch}
				</div>
			</div>
		)
	}
}

export default List;