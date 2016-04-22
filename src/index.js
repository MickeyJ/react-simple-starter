import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

import Header from './Header/Header'

class Layout extends Component{
  render(){
    return(
      <div>
        
        <Header title={this.props.title}/>
        
        <h5 style={{color: 'red'}}>
          {process.env.NODE_ENV.toUpperCase()}
        </h5>
      </div>
    )
  }
}

render(
  <Layout title={'Some Website'}/>,
  document.getElementById('react-app')
);