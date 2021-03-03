import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, StatusBar} from 'react-native';
import {
  RegularText,
  hp,
  wp,
  Button,
  TextInput,
  SemiBoldText,
  navigate,
  emailValidator,
  paddingTopiOS,
} from '../../common';
import * as Colors from '../../common/colors';
import {SocialLogin} from './utils';

interface IntialState {
  email: string;
  password: string;
  emailEror: '';
  disabled: boolean;
}

class Login extends Component {
  state: IntialState = {
    email: '',
    password: '',
    emailEror: '',
    disabled: true,
  };

  handleChange = (state: string, value: string) => {
    this.setState({[state]: value}, () => {
      this.validateInput();
    });
  };

  validateInput = () => {
    const {password, emailEror} = this.state;
    if (emailEror.length > 0 || password.length < 6) {
      this.setState({disabled: true});
    } else this.setState({disabled: false});
  };

  handleSignIn = () => {
    navigate(this, 'home');
  };

  validateEmail = (email: string) => {
    if (emailValidator(email)) {
      this.setState({emailEror: ''});
    } else this.setState({emailEror: 'Invalid Email'});
  };

  render() {
    const {email, password, emailEror, disabled} = this.state;
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
            onBlur={() => this.validateEmail(email)}
            error={emailEror}
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
            error={
              password.length && password.length < 6
                ? 'Password must be more than five(5) characters'
                : ''
            }
          />
          <View style={{marginTop: hp(60)}}>
            <Button
              title="Sign In"
              onPress={this.handleSignIn}
              disabled={disabled}
            />
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

const mapStateToProps = (state: any) => {
  const {finshedOnboarding, cart} = state.appReducer;
  return {
    finished: finshedOnboarding,
    cart,
  };
};

// const mapDispatchToProps = {
//   // finishedOnboarding,
// };

export default connect(mapStateToProps, null)(Login);

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
    paddingTop: paddingTopiOS,
  },
  title: {
    fontSize: hp(24),
    marginBottom: hp(8),
  },
});
