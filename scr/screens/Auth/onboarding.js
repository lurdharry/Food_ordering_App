import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  BoldText,
  RegularText,
  hp,
  wp,
  Button,
  navigate,
  FavHeader,
} from '../../common';
import * as Colors from '../../common/colors';
import {SocialLogin} from './utils';
import {onboard1, onboard2, onboard3} from '../../../assets/images';
import {finishedOnboarding} from '../../store/actions';

const data = [
  {
    key: 1,
    title: 'Be Together',
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
  state = {
    state: 0,
  };

  _renderItems = ({item, index}) => (
    <View style={styles.itemView}>
      <Image
        source={item.image}
        resizeMode="contain"
        style={{height: hp(233), width: wp(320)}}
      />
      <BoldText title={item.title} style={styles.title} />
      <RegularText title={item.subtitle} style={styles.subtitle} />
    </View>
  );

  handleOnpress = () => {
    if (this.state.state < 2) {
      this.setState(
        prevState => ({
          state: prevState.state + 1,
        }),
        () => {
          if (this.state.state <= 2) {
            this.slider.goToSlide(this.state.state, true);
          }
        },
      );
    } else navigate(this, 'login');
  };
  renderText = () => {
    if (this.state.state < 2) {
      return 'Next';
    }
    return 'Get Started';
  };

  onSlideChange = (start, end) => {
    this.setState({state: start});
  };
  finshed = () => {
    this.props.finishedOnboarding(true);
    navigate(this, 'login');
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.skipView}
            hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
            onPress={() => this.finshed()}>
            <RegularText title="Skip" style={styles.skipText} />
          </TouchableOpacity>
          <AppIntroSlider
            data={data}
            ref={ref => (this.slider = ref)}
            renderItem={this._renderItems}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
            onSlideChange={this.onSlideChange}
          />
          <View
            style={{bottom: hp(50), alignSelf: 'center', marginTop: hp(40)}}>
            <Button title={this.renderText()} onPress={this.handleOnpress} />
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {finshedOnboarding} = state.appReducer;
  return {
    finished: finshedOnboarding,
  };
};

const mapDispatchToProps = {
  finishedOnboarding,
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    height: hp(10),
    width: hp(10),
    borderRadius: hp(5),
    backgroundColor: Colors.dotColor,
    // opacity: 0.2,
  },
  activeDotStyle: {
    height: hp(10),
    width: hp(10),
    borderRadius: hp(5),
    backgroundColor: Colors.Purple,
  },
  skipText: {
    color: Colors.LightPurple,
    fontSize: hp(16),
  },
  skipView: {
    position: 'absolute',
    top: hp(20),
    right: wp(24),
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
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
    fontSize: hp(14),
  },
  title: {
    marginTop: hp(40),
    fontSize: hp(20),
  },
});
