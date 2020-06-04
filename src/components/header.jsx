import React, { Component } from "react";
import { connect } from "react-redux";
import * as ACTIONS from "../store/actions/actions";

export class Header extends Component {
  render() {
    return (
      <div className="card-header bg-info">
        {this.props.isLoggedIn ? (
          <div>
            {this.props.user}
            <button
              className="btn btn-outline-danger float-right border-0"
              onClick={this.props.Logout}
            >
              Logout
            </button>
          </div>
        ) : (
          "Sign In"
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Logout: () => dispatch(ACTIONS.Logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
