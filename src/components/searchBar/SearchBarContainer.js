import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { saveText } from '../../actions/action';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

class SearchBarContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false
      }
      this.handleInput = this.handleInput.bind(this);
    }
  
    handleInput(input) {
      if (input) {
        this.props.saveText(input);
        this.setState(() => {
          return {
            redirect: true
          }
        })
      }
    }
  
    render() {
      let toRender;
      if (this.state.redirect) {
        toRender = <div>
                    <Redirect push to="/artistList" />
                    <SearchBar handleChange={this.handleInput} />
                  </div>
      } else {
        toRender = <SearchBar  handleChange={this.handleInput} />
      }
      return (
        toRender
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      textToSearch: state.textToSearch,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        saveText: (payload) => { dispatch(saveText(payload)) }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);