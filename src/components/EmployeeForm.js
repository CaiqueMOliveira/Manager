import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, Picker } from 'react-native';
import { employeeUpdate } from '../actions'
import { CardSection, TextField } from './';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

class EmployeeFrom extends Component {

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
      <View>
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
      </View>
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
  employeeUpdate
};

export default connect(mapStateToProps, actions)(EmployeeFrom);