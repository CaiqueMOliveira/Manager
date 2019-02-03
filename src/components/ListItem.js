import React from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './';
import { Actions } from 'react-native-router-flux';

export default (props) => {
  const { name } = props.employee;

  onRowPress = () => {
    const { employee } = props;
    Actions.employeeEdit({ employee });
  };

  return (
    <TouchableWithoutFeedback onPress={this.onRowPress}>
      <View>
        <CardSection>
          <Text style={styles.name}>
            {name}
          </Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    paddingLeft: 15
  }
});