import axios from 'axios';
import React from "react";
import { ProgressBar } from 'react-bootstrap';


class GetData extends React.Component{
    state={
        posts:[]
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
    render(){
        const {posts: data} = this.state;
      
    
        // eslint-disable-next-line eqeqeq
        if(data == 0){
            console.log('Loading...')
            console.log(data)
            return <h1>Loading...</h1>
        }else{
            console.log('Data...')
            console.log(data[0].id)
            console.log(data[0].author)
            console.log(data[0].name)
            console.log(data[0].price)
            
            return(
                <div className="" >
                      
                          <table >
  <thead>
    <tr>
      <th>  ID   </th>
      <th> Name    </th>
      <th>  Author   </th>
      <th>  Price   </th>
      

  
    </tr>
  </thead>
  <tbody>
    {data.map(item =>  {
      return (
        <tr key={Math.random()}>
          <td>{ item.id }</td>
          <td>{ item.name }</td>
          <td>{ item.author }</td>
          <td>{ item.price }</td>
   
        </tr>
      );
    })}
  </tbody>
</table>

                            </div>
                                
                       
            )
        }
        
        
    
    }
}

export default GetData;