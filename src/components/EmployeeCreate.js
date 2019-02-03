import React, { Component } from 'react';
import { Card, CardSection, Button } from './';
import { connect } from 'react-redux';
import { employeeCreate, cleanEmployeeForm } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  componentWillMount() {
    const { cleanEmployeeForm } = this.props;
    cleanEmployeeForm();
  }

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
        <EmployeeForm {...this.props} />

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
  employeeCreate,
  cleanEmployeeForm
};

export default connect(mapStateToProps, actions)(EmployeeCreate);