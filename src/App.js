import React, { Component } from 'react';
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
  }

  render() {
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