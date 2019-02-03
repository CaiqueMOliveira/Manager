import React, { Component } from 'react';
import { Card, CardSection, Button, TextField } from './';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import EmployeeFrom from './EmployeeForm';

class EmployeeCreate extends Component {

  handleButton = () => {
    const { name, phone, shift, employeeCreate } = this.props;
    employeeCreate({
      name,
      phone,
      shift: shift || 'Monday'
    });
  }

  render() {
    return (
      <Card>
        <EmployeeFrom {...this.props} />

        <CardSection>
          <Button onPress={this.handleButton}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = store => {
  const { name, phone, shift } = store.employeeForm;
  return { name, phone, shift };
};

const actions = {
  employeeCreate
};

export default connect(mapStateToProps, actions)(EmployeeCreate);