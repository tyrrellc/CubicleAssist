import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import GroupFormReducer from './GroupFormReducer';
import GroupReducer from './GroupReducer';

export default combineReducers({
  auth: AuthReducer,   //auth piece of state is produced by authreducer
  groupForm: GroupFormReducer,
  groups: GroupReducer
});
