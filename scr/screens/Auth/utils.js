import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {onboard1, onboard2, onboard3} from '../../../assets/images';
import {FaceBook, Google} from '../../../assets/icons.svg/icon_svg';
import {wp, hp} from '../../common';
import * as Colors from '../../common/colors';

export const intoSlides = [
  {
    key: 1,
    title: 'Be Togather',
    subtitle:
      'Healthy eating means eating a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy.',
    image: onboard1,
  },
  {
    key: 2,
    title: 'Choose A Tasty Dish',
    subtitle: 'Order anything you want from your Favorite restaurant.',
    image: onboard2,
  },
  {
    key: 3,
    title: 'Easy Payment',
    subtitle:
      'Payment made easy through debit card, credit card  & more ways to pay for your food',
    image: onboard3,
  },
];

export const SocialLogin = ({googleOnpress, fbOnpress}) => (
  <View style={styles.socialContainer}>
    <TouchableOpacity style={styles.iconContainer} onPress={googleOnpress}>
      <Google />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconContainer} onPress={fbOnpress}>
      <FaceBook />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(327),
  },
  iconContainer: {
    width: wp(148),
    height: hp(56),
    borderRadius: hp(16),
    backgroundColor: Colors.LightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
