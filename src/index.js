import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class Layout extends Component{
  render(){
    return(
      <div>
        <Header title={this.props.title}/>
        <Main title={this.props.title}/>
        <Footer title={this.props.title}/>
      </div>
    )
  }
}

render(
  <Layout title={'Some Website'}/>,
  document.getElementById('react-app')
);