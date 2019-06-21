import React from 'react';
import { async } from 'q';

class probando extends React.Component{
    componentDidMount(){
        this.fetchSearch()
    }

    fetchSearch = async () =>{
        const response = await fetch('https://api.spotify.com/v1/search?q=maluma&type=artist&limit=10`)+9
    }

    render(){

        return(
            <div> hello </div>
        )
    }
}