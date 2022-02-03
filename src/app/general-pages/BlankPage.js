import React, { Component } from 'react';
import GetData from "../getdata/GetData";


export class BlankPage extends Component {

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
   alert(user);
    return (
      <div>
        <h1>Welcome to ....</h1>

        <GetData />
        
      </div>
    
    )
  }
}

export default BlankPage
