import { combineReducers } from 'redux';
import topUsersReducer from './topUsersReducer';

const mainReducer = combineReducers({
  topUsersReducer,
});

export default mainReducer;