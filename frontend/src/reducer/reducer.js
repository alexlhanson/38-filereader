import { combineReducers } from 'redux';
import auth from '../reducer/auth-reducer';
import profile from './profile-reducer';

export default combineReducers({
  auth,
  profile

})