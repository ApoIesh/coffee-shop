import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import OtherReduser from './OtherReduser';

export default combineReducers({
  auth: AuthReducer,
  other: OtherReduser,
});
