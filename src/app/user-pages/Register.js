import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth-service/AuthService';

export class Register extends Component {
  state = {
    username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      errorMsg:false,
  }

  register(){
    AuthService.register(this.state.username,this.state.email,this.state.password)
    .then(() => {
      this.props.history.push("/user-pages/login");
      window.location.reload();
    },
    error=> {

        this.setState({
          errorMsg: true
        });
    })
  }


 changeHandler = (e) => {
this.setState({
  [e.target.name]:e.target.value,
});
 } 
  render() {
  const  { username, email, password,errorMsg } = this.state;
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                {errorMsg &&  <h6 className="font-weight-light bg-warning">Please enter the valid data</h6>}
                <form className="pt-3">
                  <div className="form-group">
                    <input name="username" value={username} onChange={this.changeHandler}  type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input name="email" type="email"  value={email} onChange={this.changeHandler}  className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                
                  <div className="form-group">
                    <input name="password" type="password" value={password} onChange={this.changeHandler}  className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button onClick={(e)=>{
                      e.preventDefault()
                      this.register('test')
                      }} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/user-pages/login">SIGN UP</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
