import firebase from 'firebase';
import { insertNewEmployee } from '../firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
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
