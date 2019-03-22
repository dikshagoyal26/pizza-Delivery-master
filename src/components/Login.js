import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Input from './Input/Input';

class List extends React.Component {
  constructor(props){
    super()
    this.state = {
      display_form:"login"
    }
  }
  handleClick = () =>{
    this.state.display_form == 'login' ? this.setState({display_form:'signup'}): this.setState({display_form:'login'})
  }
  render(){
    return(
      <div className="col-12 p-0 login_page">    
        <header className="App-header">
          <nav className="navbar navbar-dark mx-5">
            <a className="navbar-brand" href="/"> Logo </a>
           <a>  <button data-toggle="modal" data-target="#LoginForm" className="btn btn-danger">Login</button></a>
          </nav>
        </header>
        <img src="https://images6.alphacoders.com/412/412086.jpg"></img> 
        <div className="modal fade" id="LoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog " role="document">
                    <div className="modal-content"> 
                        { this.state.display_form == "login" ? ( <div className="login">
                                                                    <div className="modal-body">
                                                                      <h4 className="text-center">Log in</h4>
                                                                      <div className="form-group">   
                                                                        <div className="md-form form-sm mb-3">
                                                                          <Input 
                                                                            type="email"
                                                                            id="email"
                                                                            title=<i className="fas fa-envelope"></i>
                                                                          />
                                                                        </div>
                                                                        <div className="md-form form-sm mb-3">
                                                                           <Input 
                                                                            type="password"
                                                                            id="password"
                                                                            title=<i className="fas fa-lock prefix"></i>
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                      <div className="text-center">
                                                                        <a href="/menu">
                                                                          <button className="btn btn-danger"  onClick={() => this.props.dispatch({type:'LOGIN'})}  >Log in <i className="fas fa-sign-in ml-1"></i></button>
                                                                        </a>
                                                                      </div>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                      <div >
                                                                        <p>Not a member? <a href="#signup" className="blue-text" onClick={this.handleClick}>Sign Up</a></p>
                                                                        <p>Forgot <a href="#" className="blue-text">Password?</a></p>
                                                                      </div>
                                                                      <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                                                                    </div>
                                                                  </div> ) :
                                                                    ( <div className="signup">
                                                                        <div className="modal-body">
                                                                          <h4 className="text-center">Sign up</h4>
                                                                          <div className="md-form form-sm mb-3">
                                                                            <Input 
                                                                                type="email"
                                                                                id="email"
                                                                                title=<i className="fas fa-envelope"></i>

                                                                              />
                                                                          </div>
                                                                          <div className="md-form form-sm mb-3">
                                                                            <Input 
                                                                                type="password"
                                                                                id="password"
                                                                                title=<i className="fas fa-lock prefix"></i>

                                                                              />
                                                                          </div>
                                                                          <div className="md-form form-sm mb-3">
                                                                            <Input 
                                                                                type="password"
                                                                                id="confirmpassword"
                                                                                title=<i className="fas fa-lock prefix"></i>
                                                                              />
                                                                          </div>
                                                                          <div className="text-center form-sm mt-2">
                                                                            <button className="btn btn-info" onClick={() => this.props.dispatch({type:'SIGNUP'})}  >Sign up <i className="fas fa-sign-in ml-1"></i></button>
                                                                          </div>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                          <div className="options text-right">
                                                                            <p className="pt-1">Already have an account? <a onClick={this.handleClick} href="#login" className="blue-text">Log In</a></p>
                                                                          </div>
                                                                          <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                                                                        </div>
                                                                      </div>) } 
                    </div>
                  </div>
                </div>
      </div>
      )
  }
}

export default connect()(List);