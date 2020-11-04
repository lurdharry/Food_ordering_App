import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {BoldText, RegularText} from '../../common';
import * as Colors from '../../common/colors';
import {intoSlides} from './utils';

class Onboarding extends Component {
  _renderItems = ({items}) => {
    const {key, image, title, subtitle} = items;
    return (
      <View style={styles.itemView}>
        <Image source={image} resizeMode="contain" />
        <BoldText title={title} />
        <RegularText title={subtitle} style={styles.subtitle} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <AppIntroSlider
          data={intoSlides}
          renderItem={items => this._renderItems(items)}
        />
      </SafeAreaView>
    );
  }
}

export default Onboarding;

const styles = StyleSheet.create({
  itemView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: Colors.LightPurple,
    textAlign: 'center',
  },
});
