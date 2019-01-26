import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { initializeFirebase } from './firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  componentWillMount() {
    initializeFirebase();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
