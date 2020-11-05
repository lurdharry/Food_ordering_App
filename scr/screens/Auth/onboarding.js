import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {BoldText, RegularText, hp, wp} from '../../common';
import * as Colors from '../../common/colors';
import {SocialLogin} from './utils';
import {onboard1, onboard2, onboard3} from '../../../assets/images';

const data = [
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
class Onboarding extends Component {
  _renderItems = ({item}) => (
    <View style={styles.itemView}>
      <Image
        source={item.image}
        resizeMode="contain"
        style={{height: hp(233), width: wp(320)}}
      />
      <BoldText title={item.title} />
      <RegularText title={item.subtitle} style={styles.subtitle} />
    </View>
  );

  render() {
    return (
      <>
        <Text>dgdgd</Text>
        <AppIntroSlider
          data={data}
          renderItem={this._renderItems}
          showNextButton={false}
          showDoneButton={false}
        />
      </>
    );
  }
}

export default Onboarding;

const styles = StyleSheet.create({
  itemView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(100),
  },
  subtitle: {
    color: Colors.LightPurple,
    textAlign: 'center',
    lineHeight: hp(24),
    marginHorizontal: wp(50),
    marginTop: hp(16),
  },
});
