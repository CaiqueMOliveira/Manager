import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFrom from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFrom
});