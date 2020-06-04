import * as ACTION_TYPES from "../actions/action_types";
import users from "../users.json";

const initalState = {
  isLoggedIn: false,
  user: "@hacker",
  avatar: "",
  dis: "",
};
const rootReducer = (state = initalState, action) => {
  // let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  // let user = localStorage.getItem("user");
  // console.log(isLoggedIn);
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      let user = action.payload;
      console.log(users[user]["avatar"]);
      return {
        ...state,
        user: user,
        isLoggedIn: true,
        avatar: users[user]["avatar"],
        dis: users[user]["dis"],
      };
    case ACTION_TYPES.LOGOUT:
      // console.log(isLoggedIn);
      return {
        ...state,
        user: "",
        isLoggedIn: false,
        avatar: "",
        dis: "",
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
