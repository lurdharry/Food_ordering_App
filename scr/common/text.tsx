import React from 'react';
import {Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import * as Colors from './colors';
import {hp} from './utils';

type Props = {
  title: string;
  style?: any;
  onPress?: () => void;
};

const BoldText: React.FC<Props> = ({title, style}) => (
  <Text style={[styles.BoldText, style]}>{title}</Text>
);

const RegularText: React.FC<Props> = ({title, style}) => (
  <Text style={[styles.RegularText, style]}>{title}</Text>
);

const SemiBoldText: React.FC<Props> = ({title, style}) => (
  <Text style={[styles.semibold, style]}>{title}</Text>
);

const MediumText: React.FC<Props> = ({title, style}) => (
  <Text style={[styles.medium, style]}>{title}</Text>
);

const styles = StyleSheet.create({
  BoldText: {
    fontSize: hp(14),
    color: Colors.Black,
    fontFamily: 'Poppins-Bold',
  },
  RegularText: {
    fontSize: hp(9),
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
