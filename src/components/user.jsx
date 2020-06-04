import React, { Component } from "react";
import { connect } from "react-redux";
import users from "../store/users.json";

export class User extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top m-3"
            src={this.props.avatar}
            alt="image"
            style={{ width: 100 }}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.user}</h5>
            <p className="card-text">{this.props.dis}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    avatar: state.avatar,
    dis: state.dis,
  };
}

export default connect(mapStateToProps, null)(User);
