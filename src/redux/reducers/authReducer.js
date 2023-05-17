const initialState = {
    loggedInUser: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          loggedInUser: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          loggedInUser: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  