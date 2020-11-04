import React from 'react';
import {Text, StyleSheet} from 'react-native';
import * as Colors from './colors';
import {hp, wp} from './utils';

const BoldText = ({style, title}) => (
  <Text style={[styles.BoldText, style]}>{title}</Text>
);

const RegularText = ({style, title}) => (
  <Text style={[styles.RegularText, style]}>{title}</Text>
);

const styles = StyleSheet.create({
  BoldText: {
    fontSize: hp(20),
    fontWeight: 'bold',
    lineHeight: hp(30),
    color: Colors.Black,
  },
  RegularText: {
    fontSize: hp(14),
    // fontWeight: 'bold',
    lineHeight: hp(24),
    color: Colors.Black,
  },
});

export {BoldText, RegularText};
