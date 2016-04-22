import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

class Layout extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

render(
  <Layout title={'Some Website'}/>,
  document.getElementById('react-app')
);