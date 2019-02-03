import React, { Component } from 'react';
import _ from 'lodash';
import { Card, CardSection, Button, Confirm } from './';
import { connect } from 'react-redux';
import EmployeeFrom from './EmployeeForm';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete
} from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

  state = { showModal: false };

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

  onTextSchedulePress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your next upcoming shift is on ${shift}`);
  }

  onDecline = () => {
    this.setState({ showModal: false });
  }

  onAccept = () => {
    const { uid } = this.props.employee;
    const { employeeDelete } = this.props;
    employeeDelete({ uid });
  }

  render() {
    return (
      <Card>
        <EmployeeFrom />

        <CardSection>
          <Button onPress={this.onButonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextSchedulePress}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          onDecline={this.onDecline}
          onAccept={this.onAccept}
          visible={this.state.showModal}
        >
          Are you sure you want fire this employee?
        </Confirm>
      </Card >
    );
  }
}

const mapSatteToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

const actions = {
  employeeUpdate,
  employeeSave,
  employeeDelete
};

export default connect(mapSatteToProps, actions)(EmployeeEdit);