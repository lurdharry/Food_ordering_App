import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import {Header, wp, hp, TypesCard} from '../../common';
import * as Colors from '../../common/colors';
import {Types} from '../Home/utils';
import {Foods, MenuFoodCard} from './utils';
import {addItemToCart, removeFromCart} from '../../store/actions';

class Menu extends Component {
  state = {
    isFav: false,
    title: 'Best Seller',
    Cart: [],
    animation: new Animated.Value(0),
  };

  onSelect = title => {
    this.setState({title});
  };
  addTocart = item => {
    const {cart} = this.props;
    if (cart.length > 0) {
      const index = cart.indexOf(item);
      if (index > -1) {
        this.props.removeFromCart(item);
      }
    } else {
      this.props.addItemToCart(item);
    }
  };

  showSelected = item => {
    const {cart} = this.props;
    if (cart.some(food => food.id === item.id)) {
      return true;
    } else {
      return false;
    }
  };
  removeFromCart = item => {
    this.props.removeFromCart(item);
    // let Cart = this.state.Cart;
    // if (Cart.length > 0) {
    //   const index = Cart.indexOf(item);
    //   if (index > -1) {
    //     Cart.splice(index, 1);
    //   }
    // }
    // this.setState({Cart});
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
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.White} />
        <Header navigation={this.props.navigation} />
        <View style={{backgroundColor: Colors.White, flex: 1}}>
          <FlatList
            data={Types}
            contentContainerStyle={{
              paddingHorizontal: wp(24),
              paddingTop: hp(28),
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
            extraData={this.state}
          />
        </View>
      </>
    );
  }
}

// export default Menu;
const mapStateToProps = state => {
  const {cart, cartTotal} = state;
  return {
    cart,
    cartTotal,
  };
};
const mapDispatchToProps = {
  addItemToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: wp(24),
    flexDirection: 'row',
  },
});
