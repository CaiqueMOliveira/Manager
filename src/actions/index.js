import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
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
  try {

    dispatch({ type: LOGIN_USER });

    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    loginUserSuccess(dispatch, user);

  } catch (error) {

    try {

      const createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      loginUserSuccess(dispatch, createdUser);

    } catch (error) { loginUserFail(dispatch); }
  }
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};