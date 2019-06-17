import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

/******************************component*****************************************/

import HomeView from './routes/homeView/homeView';

/******************************component*****************************************/
/******************************actions*****************************************/

import {getList} from './actions/action';

/******************************actions*****************************************/

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(dataSearch){
    this.props.getList(dataSearch);
    
  }

  render() {
    if (this.props.redirect) {
      return <Redirect to={{ pathname:"/artistList"}} />
    }
    
    
    return (
      <HomeView dff={this.handleSearch}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    textToSearch: state.textToSearch,
    searchResult: state.searchResult,
    redirect: state.redirect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (query) => dispatch(getList(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);