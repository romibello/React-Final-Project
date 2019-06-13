import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class redirecting extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/about" />
    }
  }
  render () {
    return (
       <div className="container">
         <div className="row">
           <div className="col">
            <p>sdjfkskjfsjdksfdajbk</p>
            {this.renderRedirect()}
            <button onClick={this.setRedirect}>Redirect</button>
           </div>
           <div className="col">
             <p>estamos en redirect</p>
           </div>

         </div>
       </div>
    )
  }
}

export default redirecting;