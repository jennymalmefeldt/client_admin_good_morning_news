import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        authenticated: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
