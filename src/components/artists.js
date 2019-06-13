import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import showCard from './cards';

class List extends Component {
    constructor(props){
        super(props);
        this.state ={
            listAlbums:{items:[]},
            url:this.props.location.artists.id
        }
    } 
    
   componentDidMount(prevProps,prevState){
      this.search();
    }
    
    async search() {
        const URL = 'https://api.spotify.com/v1/artists/'+ this.props.location.artists.id +'/albums';
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
                listAlbums: t,
							})
            });
          }
        }
        catch (response) {
          console.log(response);
        };
    }
    

    render(){
			console.log(this.props.location.artists);
			console.log("listAlmuns:");
			console.log(this.state.listAlbums);
			let optional = "https://t4.ftcdn.net/jpg/01/39/16/63/240_F_139166369_NdTDXc0lM57N66868lC66PpsaMkFSwaf.jpg";
			const mySearch = this.state.listAlbums.items.map((item,i)=>{
				console.log(item);
				return(
					item.available_markets.includes("AR") ?// this json brings me all the albums belonging to an artist by area, so I only show those available in ARG
					<div className="card" key={i}>
						<Link to="/">
						<div className="row">
							<div className="col col-sm">
								<img src={ item.images.length > 0? item.images[0].url : optional} alt="img" className="img-fluid"></img>
							</div>
							<div className="col-8 col-sm">
								<h4>{item.name}</h4>
							</div>
						</div>
						</Link>
            <div>
              <p> func </p>
              <showCard list={this.state.listAlbums}></showCard>
            </div>
					</div>
					:
					null
				)
		})

		return(
			<div className="container">
				{mySearch}
			</div>
		)
	}
}

export default List;