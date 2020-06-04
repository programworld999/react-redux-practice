import React, { Component } from "react";
// import { connect } from "react-redux";

// import * as ACTION_TYPES from "./store/actions/action_types";
// import * as ACTIONS from "./store/actions/actions";
import LoginForm from "./components/loginForm";
import Header from "./components/header";
import { connect } from "react-redux";
import User from "./components/user";

export class App extends Component {
  render() {
    console.log(this.props.isLoggedIn);
    // console.log(JSON.parse(localStorage.getItem("isLoggedIn")));
    let isLoggedIn = JSON.parse(this.props.isLoggedIn);
    const MainView = () => {
      if (isLoggedIn !== true || isLoggedIn === null) {
        return <LoginForm />;
      } else {
        return <User />;
      }
    };
    return (
      <div className="App container">
        <div className="container mt-5">
          <div className="card">
            <Header />
            <div className="card-body">
              <h5 className="card-title">Reduxy Login</h5>
              {/* {localStorage.getItem("isLoggedIn") ? <User /> : <LoginForm />} */}
              <MainView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

export default connect(mapStateToProps, null)(App);
