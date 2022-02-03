import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.umbrellanet.com.au/" target="_blank" rel="noopener noreferrer">umbrellanet.com.au </a>2020</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Power by <a href="https://www.umbrellanet.com.au/" target="_blank" rel="noopener noreferrer"> umbrellanet </a> from Umbrellanet Developer Team  </span>
        </div>
      </footer> 
    );
  }
}

export default Footer;