import React, { Component } from 'react'
// import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';

export class BasicTable extends Component {
    state={
        posts:[],
        newData: [],
    }

    componentDidMount(){
        axios.get('http://172.31.101.48:8080/books')
        .then(response =>{
            this.setState({
                posts: response.data
            })
        })
        .catch(error => console.log(error))
    }
    ClickHandler =()=>{
      console.log('button clicked')

    }
    ChangeHandler =()=>{
        

    }


  render() {
      const { posts } = this.state;
      console.log(posts);
      if(posts === 0){
        console.log('Loading...')
        console.log(posts)
        return <h1>Loading...</h1>
    }else{
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Basic Tables </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div className="col grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Hoverable Table</h4>
              
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Product</th>
                        <th>Sale</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {posts.map((item) =>  {
      return (
      
        <tr key={item.id}>
          <td>{ item.id }</td>
          <td>{ item.name }</td>
          <td>{ item.author }</td>
          <td>{ item.price }</td>
          <td><label className="badge badge-danger">Purchased</label></td>
          <button onClick={this.ClickHandler}>Edit</button>
        </tr>
      );
    })}                  
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
}
  }
}

export default BasicTable
