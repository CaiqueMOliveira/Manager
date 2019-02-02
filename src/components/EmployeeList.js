import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import _ from 'lodash';
import { fetchEmployees } from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentWillMount() {
    const { fetchEmployees, employees } = this.props;
    fetchEmployees();

    this.createDataSource({ employees });
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.dataSource = dataSource.cloneWithRows(employees);
  }

  renderRow = (employee) => (
    <ListItem employee={employee} />
  );

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const action = {
  fetchEmployees
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (employee, uid) => ({ ...employee, uid }));
  return { employees };
};

export default connect(mapStateToProps, action)(EmployeeList);