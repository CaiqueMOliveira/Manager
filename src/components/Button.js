import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.label}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  label: {
    fontSize: 16,
    color: '#007aff',
    alignSelf: 'center',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});