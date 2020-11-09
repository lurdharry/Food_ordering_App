import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Button as Btn} from 'react-native-elements';
import {hp, wp} from './utils';

import * as Colors from './colors';

const Button = ({
  style,
  buttonStyle,
  disabled,
  disabledStyle,
  loading,
  onPress,
  title,
  titleStyle,
  icon,
  iconRight,
}) => {
  return (
    <Btn
      style={style}
      icon={icon}
      title={title}
      buttonStyle={[styles.button, style, buttonStyle]}
      loading={loading}
      titleStyle={[styles.title, titleStyle]}
      disabled={disabled}
      disabledStyle={disabledStyle}
      disabledTitleStyle={styles.disabledTitleStyle}
      onPress={onPress}
      iconRight={iconRight}
    />
  );
};

export {Button};

const styles = StyleSheet.create({
  button: {
    width: wp(327),
    height: hp(64),
    backgroundColor: Colors.Purple,
    borderStyle: 'solid',
    borderRadius: hp(20),
    // alignSelf: 'center',
  },

  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(18),
    color: Colors.White,
    // marginTop: Platform.OS === 'android' ? -hp(7) : 0,
  },
  disabledStyle: {
    // backgroundColor: Colors.InactiveBlue,
  },
  disabledTitleStyle: {
    color: Colors.White,
  },
});
