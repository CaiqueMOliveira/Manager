import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { initializeFirebase } from './firebase';
import Router from './Router';

export default class App extends Component {

  componentWillMount() {
    initializeFirebase();
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
