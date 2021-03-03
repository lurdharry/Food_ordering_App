import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Button as Btn, ButtonProps} from 'react-native-elements';
import {hp, wp} from './utils';

import * as Colors from './colors';

interface props extends ButtonProps {
  style?: object;
  buttonStyle?: object;

  titleStyle?: object;

  iconRight?: any;
}

const Button: React.FC<props> = ({
  style,
  buttonStyle,
  titleStyle,
  icon,
  iconRight,
  ...props
}) => (
  <Btn
    style={style}
    buttonStyle={[styles.button, style, buttonStyle]}
    titleStyle={[styles.title, titleStyle]}
    disabledStyle={styles.disabledStyle}
    disabledTitleStyle={styles.disabledTitleStyle}
    iconRight={iconRight}
    {...props}
  />
);

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
