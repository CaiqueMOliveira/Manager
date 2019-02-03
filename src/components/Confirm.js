import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { CardSection, Button } from './';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    flex: 1,
    position: 'relative',
    justifyContent: 'center'
  },
  message: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center'
  },
  section: {
    justifyContent: 'center'
  }
});

export const Confirm = ({ onAccept, onDecline, visible, children }) => {
  return (
    <Modal
      transparent
      animated="slide"
      visible={visible}
      onRequestClose={() => { }}
    >
      <View style={styles.container}>
        <CardSection styles={styles.section}>
          <Text style={styles.message}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};