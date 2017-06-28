import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const INFO_PUSH_TEST = 'info_push_test';
export const infoPush = ({ info }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/testInfo`)
      .push({ info })
      .then(() => {
        dispatch({ type: INFO_PUSH_TEST });
      });
  };
};

export const INFO_PULL_TEST = 'info_pull_test'
export const infoPull = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/testInfo`)
      .on('value', snapshot => {
        dispatch({ type: INFO_PULL_TEST, payload: snapshot.val() });
      }); //anytime data come from the firebase ref, call this function to make object that describes data
  };
};

export const INFO_UPDATE = 'group_update';
export const infoUpdate = ({ prop, value }) => {
  return {
    type: INFO_UPDATE,
    payload: { prop, value }
  };
};
