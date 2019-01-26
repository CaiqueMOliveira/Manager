// Import libraries for making a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make a component
const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

// Make the component avalable to other parts of the app
export { Header };