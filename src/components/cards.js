import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class cards extends Component{
	render(){
		console.log("en la func");
		console.log(this.props);
		let optional = "https://t4.ftcdn.net/jpg/01/39/16/63/240_F_139166369_NdTDXc0lM57N66868lC66PpsaMkFSwaf.jpg";
		const mySearch = this.props.list.items.map((item,i)=>{
			console.log("en la func");
			console.log(item);
			return(
				<div className="card" key={i}>
					<Link to="/">
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
			)})
		return (
			<div className="container">
				{mySearch}
			</div>
		)
	}
}

export default cards;