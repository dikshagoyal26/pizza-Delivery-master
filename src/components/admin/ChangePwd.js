import React from "react";
import Input from "../user/Input/Input";
import { changeAdminPwd } from "../../actions/adminActions";
import { connect } from "react-redux";

class ChangePwd extends React.Component {
  constructor(props) {
    super();
    this.state = {
      oldpassword: "",
      password: "",
      confirmpassword: "",
      formErrors: {
        oldpassword: "",
        password: "",
        confirmpassword: ""
      },
      formValid: false
    };
  }

  clearState = () => {
    this.setState({
      oldpassword: "",
      password: "",
      confirmpassword: "",
      formErrors: {
        oldpassword: "",
        password: "",
        confirmpassword: ""
      },
      formValid: false
    });
  };

  onChangePassword = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let isvalid = this.validate();
    this.setState({ formValid: isvalid });
    if (isvalid) {
      let adminData = {
        oldpassword: this.state.oldpassword,
        password: this.state.password
      };
      this.props.changeAdminPwd(adminData, this.props.history);
      this.clearState();
    }
  };

  validate = () => {
    let oldpwdError = "";
    let pwderror = "";
    let confirmerror = "";

    if (!this.state.oldpassword) {
      oldpwdError = "Enter the new password";
    } else {
      if (this.state.oldpassword.length < 6) {
        oldpwdError = "Invalid password";
      }
    }

    if (!this.state.password) {
      pwderror = "Enter the new password";
    } else {
      if (this.state.password.length < 6) {
        pwderror = "Invalid password";
      }
    }

    if (
      this.state.password !== this.state.confirmpassword ||
      !this.state.confirmpassword
    ) {
      confirmerror = "Password does not match";
    }

    if (oldpwdError || pwderror || confirmerror) {
      this.setState({
        formErrors: {
          oldpassword: oldpwdError,
          password: pwderror,
          confirmpassword: confirmerror
        }
      });
      return false;
    }
    return true;
  };

  render() {
    return (
      <div className="bg-light  border rounded-lg col-md-6 my-3 mx-auto p-3">
        <h2 className="text-center text-danger">CHANGE PASSWORD</h2>
        <form onSubmit={this.onSubmit} className="formGroup">
          <Input
            name="oldpassword"
            type="password"
            placeholder="Password*"
            handleChange={this.onChangePassword}
            value={this.state.oldpassword}
            error={this.state.formErrors.oldpassword}
          />
          <Input
            name="password"
            type="password"
            placeholder="New Password*"
            handleChange={this.onChangePassword}
            value={this.state.password}
            error={this.state.formErrors.password}
          />

          <Input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password*"
            handleChange={this.onChangePassword}
            value={this.state.confirmpassword}
            error={this.state.formErrors.confirmpassword}
          />

          <div className="text-center">
            <a href=" ">
              <button className="btn btn-danger mt-3" type="submit">
                Submit
              </button>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { changeAdminPwd }
)(ChangePwd);
