import firebase from 'firebase';
import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  LOGIN_USER_SUCCESS
} from './types';

export const setEmail = emailAddress => ({
  type: SET_EMAIL_ADDRESS,
  payload: emailAddress
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: password
});

export const loginUser = ({ email, password }) => async dispatch => {
  const user = await firebase.auth().signInWithEmailAndPassword(email, password);
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};