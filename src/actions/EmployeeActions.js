import firebase from 'firebase';
import { insertNewEmployee } from '../firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => async dispatch => {
  const { currentUser } = firebase.auth();

  const userHasBeenInserted = await insertNewEmployee({
    name,
    phone,
    shift,
    currentUserAuth: currentUser.uid
  });

  if (userHasBeenInserted) {
    Actions.pop();
    dispatch({ type: EMPLOYEE_CREATE });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => async dispatch => {
  const { currentUser } = firebase.auth();
  await firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift });
  Actions.pop();
  dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
}

export const fetchEmployees = () => async dispatch => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
};
