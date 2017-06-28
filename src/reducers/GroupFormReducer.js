import { GROUP_UPDATE, GROUP_CREATE, GROUP_SAVE_SUCCESS, GROUP_DELETE_SUCCESS, CANCEL_UPDATE } from '../actions/GroupActions';

const INITIAL_STATE = {
  name: '',
  course: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GROUP_UPDATE:
    // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
        //this is not array, it is key interpolation, this allows different inputs (name, shift) to work on same code

    case GROUP_CREATE:
      return INITIAL_STATE;

    case GROUP_SAVE_SUCCESS:
      return INITIAL_STATE;

    case GROUP_DELETE_SUCCESS:
      return INITIAL_STATE;

    case CANCEL_UPDATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
