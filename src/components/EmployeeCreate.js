import React, { Component } from 'react';
import { Card, CardSection, Button, TextField } from './';
import { connect } from 'react-redux';
import { Picker, Text, StyleSheet } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

class EmployeeCreate extends Component {

  handleName = name => {
    const { employeeUpdate } = this.props;
    employeeUpdate({
      prop: 'name',
      value: name
    });
  };

  handleShift = shift => {
    const { employeeUpdate } = this.props;
    employeeUpdate({
      prop: 'shift',
      value: shift
    });
  }

  handleButton = () => {
    const { name, phone, shift, employeeCreate } = this.props;
    employeeCreate({
      name,
      phone,
      shift: shift || 'Monday'
    });
  }

  handlePhone = phone => {
    const { employeeUpdate } = this.props;
    employeeUpdate({
      prop: 'phone',
      value: phone
    });
  };

  renderPickerItems = (items) => {
    return items.map(item =>
      <Picker.Item key={item} label={item} value={item} />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextField
            label="Name"
            placeholder="Mike"
            value={this.props.name}
            onChangeText={this.handleName}
          />
        </CardSection>

        <CardSection>
          <TextField
            label="Phone"
            placeholder="(11) 12345-6789"
            value={this.props.phone}
            onChangeText={this.handlePhone}
          />
        </CardSection>

        <CardSection style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            style={{ flex: 2 }}
            selectedValue={this.props.shift}
            onValueChange={this.handleShift}
          >
            {this.renderPickerItems(daysOfWeek)}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.handleButton}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    paddingLeft: 25,
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 18,
    flex: 1
  }
});

const mapStateToProps = store => {
  const { name, phone, shift } = store.employeeForm;
  return { name, phone, shift };
};

const actions = {
  employeeUpdate,
  employeeCreate
};

export default connect(mapStateToProps, actions)(EmployeeCreate);