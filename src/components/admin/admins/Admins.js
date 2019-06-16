import React, { Component } from "react";
import AdminItem from "./AdminItem";
import { connect } from "react-redux";
import { getAllAdmins, addAdmin } from "../../../actions/adminActions";
import Input from "../../user/Input/Input";

class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      adminid: "",
      is_add_mode: false
    };
    this.onClickAdd = this.onClickAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickAdd = () => {
    if (this.state.is_add_mode) {
      const adminData = {
        name: this.state.name,
        adminid: this.state.adminid
      };
      this.props.addAdmin(adminData, this.props.history);
    }
    this.setState({ is_add_mode: !this.state.is_add_mode });
  };

  componentDidMount() {
    this.props.getAllAdmins();
  }

  render() {
    let AdminComponents;
    if (this.props.admins == null) {
      AdminComponents = <p>Loading...</p>;
    } else {
      if (this.props.admins.length > 0) {
        AdminComponents = this.props.admins.map(admin => {
          return (
            <AdminItem
              key={admin._id}
              adminid={admin.adminid}
              name={admin.name}
              onClickEdit={this.onClickEdit}
            />
          );
        });
      } else {
        AdminComponents = <h4>No Admin Found</h4>;
      }
    }

    return (
      <div className="admin-list container text-center ">
        <h2 className="text-center">List of Admins</h2>
        {this.state.is_add_mode ? (
          <div>
            <h6>Enter Admin Details</h6>
            <form>
              <Input
                type="text"
                name="name"
                placeholder="Enter Admin Name"
                label="Name: "
                handleChange={this.handleChange}
              />
              <Input
                type="text"
                name="adminid"
                placeholder="Enter Admin ID (Email)"
                label="Admin ID: "
                handleChange={this.handleChange}
              />
            </form>
          </div>
        ) : null}

        <button className="btn btn-info mb-3" onClick={this.onClickAdd}>
          Add Admin
        </button>

        <div className="row">{AdminComponents}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    admins: state.ar.admins
  };
};

export default connect(
  mapStateToProps,
  { getAllAdmins, addAdmin }
)(Admins);
