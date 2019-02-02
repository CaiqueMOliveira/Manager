import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './';

export default (props) => {
  const { name } = props.employee;
  return (
    <CardSection>
      <Text style={styles.name}>
        {name}
      </Text>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    paddingLeft: 15
  }
});