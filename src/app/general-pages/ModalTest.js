
//import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import React from 'react';
//import ReactDOM from 'react-dom';
//import Modal from 'react-modal';
// import ModalApp from './ModalApp';

export class BasicTable extends React.Component {
 
    state={
        posts:[],
        newData: [],
    }
    
    componentDidMount(){
        axios.get('http://172.31.101.48:8080/books')
        .then(response =>{
            this.setState({
                posts: response.data,
                isActiveModal: false,
            })
        })
        .catch(error => console.log(error))
    }

     ClickHandler(e){   
       console.log(e);
       console.log('Button was clicked');
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
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Table</h4>
                <p className="card-description"> Add className <code>.table</code>
                </p>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>status</th>
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
          <button onClick={this.ClickHandler} >Edit</button>
      
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
