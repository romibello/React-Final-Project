import React, { Component } from 'react';
import './home.css';
import Navbar from '../../components/Navbar';

class HomeView extends Component {
    constructor(props){
        super(props);
        this.state={
            search:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        if (e.key === 'Enter'){
        e.preventDefault();
        this.props.dff(this.state.search);   
        }
        
    }

    handleInputChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="container-fluid" id="all">
                <Navbar></Navbar>
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-head">
                            <h1>Welcome to Spotisearch</h1>
                        </div>
                        <div className="card-body">
                        <p>Search your favourite songs over spotify, just enter an artist's name in the following search box and enjoy!</p>
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search" name="search" onChange={this.handleInputChange} onKeyPress={this.handleSubmit}/>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <footer className="navbar bg-dark row">
                    <div className="col-3"></div>
                    <div className="col"> </div>
                    <div className="col-4"> </div>
                </footer>

            </div>
        );
    }
}


export default HomeView;
