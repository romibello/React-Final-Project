import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {CHANGE_REDIRECT} from '../../constants/action-type';
import { Redirect } from 'react-router-dom';

class BreadcrumbHome extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		this.props.changeRedirect();
	}

	render(){
        if (this.props.redirectHome) {
            return <Redirect to={{ pathname:"/"}} />
        }
		return(
			<li className="breadcrumb-item"><Link to="/" onClick={this.handleClick}><span>Home</span></Link></li>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        redirectHome: state.redirectHome
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRedirect: () => { dispatch({ type: CHANGE_REDIRECT, payload: false})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbHome);