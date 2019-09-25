const initialState = {
  topUsers: [],
  err: null
};

function topUsersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_TOP_USERS':
      return {
        ...state,
        topUsers: action.payload
      };
      case 'SET_TOP_USERS_ERR':
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
}
export default topUsersReducer;
