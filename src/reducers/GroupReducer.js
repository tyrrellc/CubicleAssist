import { GROUPS_FETCH_SUCCESS } from '../actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

      case GROUPS_FETCH_SUCCESS:
        return action.payload;

      default:
        return state;
  }
};
