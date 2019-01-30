import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

export default () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key="auth">
          <Scene key='login' component={LoginForm} title="Sign in" initial />
        </Scene>
        <Scene key="main">
          <Scene key='employeeList' component={EmployeeList} title="Employees" />
        </Scene>
      </Scene>
    </Router>
  );
};