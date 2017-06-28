import { INFO_PUSH_TEST, INFO_PULL_TEST, INFO_UPDATE } from '../actions/InfoActions';

const INITIAL_STATE = {
  info: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INFO_UPDATE:
    // action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
        //this is not array, it is key interpolation, this allows different inputs (name, shift) to work on same code

    case INFO_PUSH_TEST:
      return INITIAL_STATE;

    case INFO_PULL_TEST:
      return action.payload;


    default:
      return state;
  }
};
