import React, { Component } from 'react';
import HomeView from './routes/homeView/homeView';
import { Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {},
      textToSearch:'',
      redirect: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(dataSearch){
    this.setState({
      textToSearch: dataSearch,
    })
    
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.textToSearch !== this.state.textToSearch){
      this.search();
    }

  }

  async search() {
    const DEFAULT_QUERY = `search?q=${this.state.textToSearch}&type=artist&limit=10`;
    const URL = 'https://api.spotify.com/v1/' + DEFAULT_QUERY;

    try {
      let response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer BQB0KC7MQg7oLTbeXE_HpjzJ3Vz8N7vFH6IaMAeFaQEQPjaHlAnYaCWTHpaAbKMEWRmK0ibO5cNvjXnSxik',
        },
      });
      if (response.ok) {
        let t = await response.json();
        this.setState(() => {
          return ({
            searchResult: t,
            redirect: true
          })
        });
      }
    }
    catch (response) {
      console.log(response);
    };
  }

 

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname:"/artistList", listArtis: this.state.searchResult, text:this.state.textToSearch}} />
    }
    
    return (
      <HomeView dff={this.handleSearch}/>
    );
  }
}

export default App;