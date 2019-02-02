import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFrom from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFrom,
  employees: EmployeeReducer
});