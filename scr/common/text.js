import React from 'react';
import {Text, StyleSheet} from 'react-native';
import * as Colors from './colors';
import {hp, wp} from './utils';

const BoldText = ({style, title, onPress}) => (
  <Text style={[styles.BoldText, style]} onPress={onPress}>
    {title}
  </Text>
);

const RegularText = ({style, title, onPress}) => (
  <Text style={[styles.RegularText, style]} onPress={onPress}>
    {title}
  </Text>
);

const SemiBoldText = ({style, title, onPress}) => (
  <Text style={[styles.semibold, style]} onPress={onPress}>
    {title}
  </Text>
);

const MediumText = ({style, title, onPress}) => (
  <Text style={[styles.medium, style]} onPress={onPress}>
    {title}
  </Text>
);

const styles = StyleSheet.create({
  BoldText: {
    fontSize: hp(14),
    color: Colors.Black,
    fontFamily: 'Poppins-Bold',
  },
  RegularText: {
    fontSize: hp(12),
    lineHeight: hp(24),
    color: Colors.Black,
    fontFamily: 'Poppins-Regular',
  },
  semibold: {
    fontSize: hp(12),
    lineHeight: hp(24),
    color: Colors.Black,
    fontFamily: 'Poppins-SemiBold',
  },
  medium: {
    fontSize: hp(12),
    lineHeight: hp(24),
    color: Colors.Black,
    fontFamily: 'Poppins-Medium',
  },
});

export {BoldText, RegularText, SemiBoldText, MediumText};
