import React, { Component } from 'react';
import '../index.css';
import {connect} from 'react-redux';
import Cards from './Cards';


class List extends Component {
	constructor(props){
		super(props);
	}
    

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="container">
						<div className="card">
							<div className="card-head">
							<h3> Artists </h3>
							</div>
							<div className="card-body">
								<p> you are currently searching: {this.props.textToSearch}</p>
							</div>
						</div>
					</div>
				</div>
				<Cards></Cards>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	  textToSearch: state.textToSearch,
	  searchResult: state.searchResult
	}
}
  
export default connect(mapStateToProps)(List);