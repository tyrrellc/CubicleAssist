import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }; //... means copy state and add the new thing (password here)

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false };
      //this is the firebase user info

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Auth Failed', password: '', loading: false };

    default:
      return state;
  }
};
