import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setEmail, setPassword, loginUser } from '../actions';
import {
  Card,
  CardSection,
  Button,
  TextField,
  Spinner
} from './';

class LoginForm extends Component {

  handleEmail = (emailAddress) => {
    const { setEmail } = this.props;
    setEmail(emailAddress);
  }

  handlePassword = (password) => {
    const { setPassword } = this.props;
    setPassword(password);
  }

  handleButton = () => {
    const { loginUser, email, password } = this.props;
    loginUser({ email, password });
  }

  renderButtonOrSpinner = () => {
    const { loading } = this.props;

    if (loading) {
      return <Spinner />
    }

    return (
      <Button onPress={this.handleButton}>
        Login
      </Button>
    );
  }

  renderError = () => {
    const { error } = this.props;

    if (error) {
      return (
        <View style={{ backgroundColor: '#fff' }}>
          <Text style={styles.errorMessage}>
            {error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextField
            onChangeText={this.handleEmail}
            label="Email"
            value={this.props.email}
            placeholder="myemail@gmail.com"
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntry
            onChangeText={this.handlePassword}
            label="Password"
            value={this.props.password}
            placeholder="password"
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButtonOrSpinner()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    color: '#ff0000',
    alignSelf: 'center',
    fontSize: 20
  }
});

const mapStateToProps = state => {
  const { auth } = state;

  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading
  }
};

const actions = {
  setEmail,
  setPassword,
  loginUser
};

export default connect(mapStateToProps, actions)(LoginForm);