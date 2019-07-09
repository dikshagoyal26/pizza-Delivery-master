import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { loginUser, loginWithGoogle } from "../../../actions/authActions";
import google from "../../../img/google.png";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      },
      isValid: false
    };
  }

  initState = () => {
    this.setState({
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      }
    });
  };

  onClick_Login = () => {
    this.setState({
      display_form: "login"
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginWithGoogle = () => {
    this.props.loginWithGoogle();
  };

  onSubmitForm = e => {
    e.preventDefault();

    let isValid = this.validate();
    this.setState({ isValid: isValid });

    if (isValid) {
      const userData = {
        userid: this.state.email,
        password: this.state.password
      };

      this.props.loginUser(userData, this.props.history);

      this.setState({
        formErrors: {
          email: "",
          password: ""
        }
      });
    }
  };

  validate = () => {
    //Validation error message variables
    let emailError = "";
    let passwordError = "";

    //Validations

    if (!this.state.email) {
      emailError = "Required email";
    }

    if (this.state.password.length < 6) {
      if (!this.state.password) passwordError = "Required Password";
      else passwordError = "Min length of password should be 6";
    }

    if (emailError || passwordError) {
      this.setState({
        formErrors: {
          email: emailError,
          password: passwordError
        }
      });
      return false;
    } else return true;
  };

  render() {
    return (
      <div className="login_form">
        <div className="home_background">
          <img
            width="100%"
            src="https://www.dominos.co.in/assets/header_bg.png"
            alt="CoverPage"
          />
        </div>
        <div className="">
          <div className="form">
            <h4 className="text-center">Log in</h4>

            {/* {this.props.errors ? (
                  <p className="text-danger text-center">
                    <i className="fas fa-exclamation-triangle" />
                    {this.props.errors}
                  </p>
                ) : null} */}

            <form onSubmit={this.onSubmitForm}>
              <div className="form-group">
                <div className="md-form form-sm mb-3">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    title={<i className="fas fa-envelope" />}
                    handleChange={this.handleChange}
                    value={this.state.email}
                  />
                  {this.state.formErrors.email ? (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle"> </i>\
                      {this.state.formErrors.email}
                    </p>
                  ) : null}
                </div>
                <div className="md-form form-sm mb-3">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    title={<i className="fas fa-lock prefix" />}
                    handleChange={this.handleChange}
                    value={this.state.password}
                  />
                  {this.state.formErrors.password ? (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle"> </i>
                      {this.state.formErrors.password}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-danger" type="submit">
                  Log in
                  <i className="fas fa-sign-in ml-1" />
                </button>
              </div>
            </form>
            <div className="text-center p-2">
              <button className="btn btn-danger" onClick={this.loginWithGoogle}>
                <img src={google} style={{ width: 30 }} /> Log in with Google
                <i className="fas fa-sign-in ml-1" />
              </button>
            </div>

            <div className="form_footer">
              <div>
                Not a member?
                <Link to="/register" className="blue-text">
                  Sign up
                </Link>
              </div>
              <div>
                Login as{"  "}
                <Link to="/admin/login" className="blue-text">
                  Admin
                </Link>
              </div>
              <div>
                Forgot
                <Link to="/forgetpwd" className="blue-text">
                  Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { loginUser, loginWithGoogle }
)(UserLogin);
