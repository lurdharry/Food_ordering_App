import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  FlatList,
  Animated,
  Text,
} from 'react-native';
import {Header, wp, hp, TypesCard, navigate} from '../../common';
import * as Colors from '../../common/colors';
import {Types} from '../Home/utils';
import {Foods, MenuFoodCard, CartPreview} from './utils';
import {addItemToCart, removeFromCart} from '../../store/actions';

class Menu extends Component {
  state = {
    isFav: false,
    title: 'Best Seller',
    Cart: [],
    animation: new Animated.Value(0),
  };
  animatedValue = new Animated.Value(0);
  onSelect = title => {
    this.setState({title});
    console.log(this.props.cart);
  };
  addTocart = item => {
    this.props.addItemToCart(item);
  };

  showSelected = item => {
    const {cart} = this.props;
    try {
      if (cart.some(food => food.id === item.id)) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
  };

  removeFromCart = item => {
    this.props.removeFromCart(item);
  };

  _renderItem = ({item}) => {
    const selected = this.showSelected(item);
    return (
      <MenuFoodCard
        source={item}
        added={selected}
        onpress={() => {
          selected ? this.removeFromCart(item) : this.addTocart(item);
        }}
      />
    );
  };

  _renderCat = ({item}) => {
    const {title} = this.state;
    return (
      <TypesCard
        title={item.title}
        onPress={() => this.onSelect(item.title)}
        selected={title === item.title}
      />
    );
  };

  render() {
    let animation = this.animatedValue.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [0, 0, 0],
    });
    const {cart, cartTotal} = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.White} />
        <Header navigation={this.props.navigation} />
        <View style={{backgroundColor: Colors.White, flex: 1}}>
          <FlatList
            data={Types}
            contentContainerStyle={{
              paddingHorizontal: wp(24),
              paddingVertical: hp(28),
              paddingRight: wp(24),
            }}
            renderItem={this._renderCat}
            horizontal={true}
            extraData={this.state}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={Foods}
            renderItem={this._renderItem}
            extraData={this.props}
          />
        </View>
        {this.props.cart.length > 0 ? (
          <Animated.View
            style={[styles.cart, {transform: [{translateY: animation}]}]}>
            <CartPreview
              count={cart.length}
              cartTotal={cartTotal}
              onPress={() => navigate(this, 'cart')}
            />
          </Animated.View>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  const {cart, cartTotal, finishedOnboarding} = state.appReducer;
  return {
    cart,
    finishedOnboarding,
    cartTotal,
  };
};
const mapDispatchToProps = {
  addItemToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
  cart: {
    height: hp(90),
    backgroundColor: Colors.Purple,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    width: '100%',
    bottom: 0,
    paddingTop: hp(16),
    paddingBottom: hp(34),
    paddingLeft: wp(22),
    paddingRight: wp(16),
  },
});
