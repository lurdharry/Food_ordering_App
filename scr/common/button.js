import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Button as Btn} from 'react-native-elements';
import {hp, wp} from './utils';

import * as Colors from './colors';

const Button = ({
  style,
  buttonStyle,
  disabled,
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
      disabledStyle={styles.disabledStyle}
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
    backgroundColor: Colors.Purple,
    borderStyle: 'solid',
    borderRadius: hp(20),
    paddingVertical: hp(12),
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(18),
    color: Colors.White,
  },
  disabledStyle: {
    backgroundColor: 'grey',
  },
  disabledTitleStyle: {
    color: Colors.White,
  },
});
