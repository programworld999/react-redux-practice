import React, { Component } from "react";
import { connect } from "react-redux";

import * as ACTIONS from "../store/actions/actions";

export class LoginForm extends Component {
  render() {
    return (
      <div>
        <form action="#" method="post" onSubmit={this.props.Login}>
          <input
            type="text"
            name="user"
            id="userInp"
            className="form-control col-8 mb-2"
            required
          />
          <button className="btn btn-outline-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Login: (e) => dispatch(ACTIONS.Login(e)),
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);
