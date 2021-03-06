import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Spinner = ({ size }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size || 'large'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});