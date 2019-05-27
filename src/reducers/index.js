import { combineReducers } from "redux";

const initState = {
  visibility: false
};

export const toggleReducer = (state = initState, action) => {

  switch (action.type) {
    case "TOGGLE":
      return { ...state, visibility: !state.visibility};
    case "CLOSE":
      return { ...state, visibility: false };
    default:
      return state;
  }
};


export default combineReducers({
  toggle: toggleReducer
});
