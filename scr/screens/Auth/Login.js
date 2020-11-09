import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {
  RegularText,
  hp,
  wp,
  Button,
  TextInput,
  SemiBoldText,
} from '../../common';
import * as Colors from '../../common/colors';
import {SocialLogin} from './utils';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (state, value) => {
    this.setState({[state]: value});
  };

  render() {
    const {email, password} = this.state;
    return (
      <>
        <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
        <View style={styles.container}>
          <SemiBoldText title="Login" style={styles.title} />
          <RegularText title="Access account" style={styles.subtitle} />
          <SocialLogin />
          <RegularText title="or Login with Email" style={styles.email} />
          <TextInput
            label="Email"
            value={email}
            noBorder
            placeholder="Input Email"
            inputContainerStyle={styles.emailInput}
            onChangeText={value => this.handleChange('email', value)}
          />
          <TextInput
            label="Password"
            value={password}
            placeholder="Input Password"
            noBorder
            inputContainerStyle={styles.emailInput}
            labelStyle={styles.passwordLabel}
            isPass
            onChangeText={value => this.handleChange('password', value)}
          />
          <View style={{marginTop: hp(60)}}>
            <Button title="Sign In" onPress={this.handleOnpress} />
          </View>
          <View style={styles.rowText}>
            <RegularText title="Don’t have an account?  " style={styles.dont} />
            <SemiBoldText title="Register" style={styles.register} />
          </View>
        </View>
      </>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  rowText: {
    flexDirection: 'row',
    marginTop: hp(24),
  },
  dont: {
    color: Colors.LightPurple,
    fontSize: hp(14),
  },
  register: {
    color: Colors.Purple,
    fontSize: hp(14),
  },
  passwordLabel: {
    marginTop: hp(24),
  },
  emailInput: {
    width: wp(327),
  },
  email: {
    color: Colors.LightPurple,
    textAlign: 'center',
    fontSize: hp(14),
    marginVertical: hp(30),
  },
  subtitle: {
    color: Colors.LightPurple,
    textAlign: 'center',
    fontSize: hp(14),
    marginBottom: hp(40),
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: hp(24),
    marginTop: hp(36),
    marginBottom: hp(8),
  },
});
