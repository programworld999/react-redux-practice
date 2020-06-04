import * as ACTION_TYPES from "./action_types";

export const Login = (e) => {
  e.preventDefault();

  // console.log(e.target.user.value);
  let user = e.target.user.value;
  let users = ["dojacat", "doja", "zzz"];
  if (users.includes(user)) {
    // console.log(user);
    // localStorage.setItem("isLoggedIn", true);
    // localStorage.setItem("user", user);
    return {
      type: ACTION_TYPES.LOGIN,
      payload: user,
    };
  } else {
    console.log("Invalid User: " + user);
    return {
      type: ACTION_TYPES.LOGOUT,
    };
  }
};

export const Logout = () => {
  localStorage.setItem("isLoggedIn", false);
  console.log(localStorage.getItem("isLoggedIn"));
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
