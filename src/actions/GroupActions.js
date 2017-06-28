import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const GROUP_UPDATE = 'group_update';
export const groupUpdate = ({ prop, value }) => {
  return {
    type: GROUP_UPDATE,
    payload: { prop, value }
  };
};

export const GROUP_CREATE = 'group_create';
export const groupCreate = ({ name, course, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/groups`)
      .push({ name, course, shift })
      .then(() => {
        dispatch({ type: GROUP_CREATE });
        Actions.groupMain({ type: 'reset' });
      });
  };
};

export const GROUPS_FETCH_SUCCESS = 'groups_fetch_success'
export const groupsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/groups`)
      .on('value', snapshot => {
        dispatch({ type: GROUPS_FETCH_SUCCESS, payload: snapshot.val() });
      }); //anytime data come from the firebase ref, call this function to make object that describes data
  };
};

export const GROUP_SAVE_SUCCESS = 'group_save_success'
export const groupSave = ({ name, course, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/groups/${uid}`)
      .set({ name, course, shift })
      .then(() => {
        dispatch({ type: GROUP_SAVE_SUCCESS });
        Actions.groupMain({ type: 'reset' });
      });
  };
};

export const GROUP_DELETE_SUCCESS = 'group_delete_success'
export const groupDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/groups/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: GROUP_DELETE_SUCCESS });
        Actions.groupMain({ type: 'reset' });
      });
  };
};

export const CANCEL_UPDATE = 'cancel_update'
export const cancelUpdate = ({ name, course, shift }) => {
  return {
    type: CANCEL_UPDATE,
    payload: { name, course, shift }
  };
};
