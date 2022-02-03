import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../auth-service/AuthService';

export class Login extends Component {
  state = {
    username: "",
      password: "",
      loading: false,
      message: "",
      errorMsg: false,
  }
  test(){
    //  const data = JSON.parse(localStorage.getItem('credentials'))
  }
  // login() {
  //   fetch('http://localhost:8082/api/auth/signin', {
  //     method:'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body:JSON.stringify({username:this.state.username,password:this.state.password})
  //   })
  //   .then(response =>response.json()
  //   .then(data => localStorage.setItem('credentials',JSON.stringify(data)) ));
  // }

  login(){
    AuthService.login(this.state.username,this.state.password)
    .then(() => {
      this.props.history.push("/dashboard");
      window.location.reload();
    },
    error=> {
      // const resMessage =
      // (error.response &&
      //   error.response &&
      //   error.data.message) || 
      //   error.message ||
      //   error.toString();

        this.setState({
          errorMsg: true
          
        });

    })
  }


  



  render() {
    // const  data = localStorage.getItem('user');
    // const data = sessionStorage.getItem("user");
    
    const { errorMsg, username, password } = this.state;

    
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                {errorMsg && <h6 className="font-weight-light bg-danger">Invalid Username or Password.</h6>}
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control value={username} onChange={(e)=>this.setState({username:e.target.value})} type="email" placeholder="Username" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control value={password} onChange={(e)=>this.setState({password:e.target.value})} type="password" placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                    <button onClick={(e)=>{
                      e.preventDefault()
                      this.login('test')
                      }} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</button>
                      
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Login
