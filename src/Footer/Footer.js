import React from 'react'

const Footer = props => (
  <footer>
    
    <span> &copy; 2016 </span>
    <span style={{fontSize: 25}}> {props.title} </span>
    <h6 style={{color: 'red', display: 'inline'}}>
      {process.env.NODE_ENV.toUpperCase()}
    </h6>
    
  </footer>
);

export default Footer