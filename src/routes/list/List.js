import React, { Component } from 'react';
import '../../index.css';
import {connect} from 'react-redux';
import Cards from '../../components/artistContainer/cards';
import {getList} from '../../actions/action';
import {CHANGE_REDIRECT} from '../../constants/action-type';
import BreadcrumbHome from '../../components/BreadCrumb/BreadcrumbHome';


class List extends Component {
	constructor(props){
		super(props);
		
	}
	
	componentDidMount(){
		if(this.props.textToSearch !== undefined){
			console.log("yo deberia de cargar");
			this.props.getList(this.props.textToSearch);
		}
	}

	componentDidUpdate(prevProps){	
		if (this.props.textToSearch !== prevProps.textToSearch) {
      		this.props.getList(this.props.textToSearch);
    	}
	}


	render(){
		return(
			<React.Fragment>
			<div className="container">
				<div className="row">
				
					<div className="container">
						<div className="card">
							<div className="card-head">
							<h3> Artists </h3>
							</div>
							<div className="card-body">
								<p> you are currently searching: {this.props.textToSearch}</p>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<BreadcrumbHome></BreadcrumbHome>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<Cards></Cards>
			</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		textToSearch: state.textToSearch,
		searchResult: state.searchResult
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
		getList: (query) => dispatch(getList(query)),
		changeRedirect: () => { dispatch({ type: CHANGE_REDIRECT, payload: false})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);