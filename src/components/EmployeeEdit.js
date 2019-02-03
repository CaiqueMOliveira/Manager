import React, { Component } from 'react';
import _ from 'lodash';
import { Card, CardSection, Button } from './';
import { connect } from 'react-redux';
import EmployeeFrom from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {

  componentWillMount() {
    const { employee, employeeUpdate } = this.props;
    _.each(employee, (value, prop) => {
      employeeUpdate({ prop, value });
    });
  }

  onButonPress = () => {
    const { name, phone, shift, employeeSave, employee } = this.props;
    employeeSave({ name, shift, phone, uid: employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeFrom />

        <CardSection>
          <Button onPress={this.onButonPress}>
            Save changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapSatteToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

const actions = {
  employeeUpdate,
  employeeSave
};

export default connect(mapSatteToProps, actions)(EmployeeEdit);