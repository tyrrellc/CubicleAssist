import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const EMAIL_CHANGED = 'email_changed';
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const PASSWORD_CHANGED = 'password_changed';
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const LOGIN_USER = 'login_user';
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const CREATE_USER = 'create_user';
export const createUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER});

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
  };
};

export const LOGIN_USER_SUCCESS = 'login_user_success';
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const LOGIN_USER_FAIL = 'login_user_fail';
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
