import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

class Layout extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        
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