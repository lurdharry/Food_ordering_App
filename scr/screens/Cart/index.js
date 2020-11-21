import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StatusBar, View, FlatList, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import {Header, BoldText, hp, RegularText, wp, Button} from '../../common';
import * as Colors from '../../common/colors';
import {AddressCard, CartItem} from './utils';
import {addItemToCart, removeFromCart} from '../../store/actions';

class Cart extends Component {
  addTocart = item => {
    this.props.addItemToCart(item);
  };

  removeFromCart = item => {
    this.props.removeFromCart(item);
  };
  _renderItem = ({item}) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        count={item.quantity}
        addToCart={() => this.addTocart(item)}
        removeFromCart={() => this.removeFromCart(item)}
      />
    );
  };
  render() {
    const {cart, cartTotal} = this.props;
    const tax = 2;
    const discount = 10;
    const Total = Number(cartTotal) - discount + tax;
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.White} />
        <Header navigation={this.props.navigation} title="Cart" noRight />
        <View
          style={{
            backgroundColor: Colors.White,
            flex: 1,
          }}>
          <AddressCard />
          <FlatList
            data={cart}
            renderItem={this._renderItem}
            extraData={this.props}
          />
          <Divider style={styles.divider} />
          <View style={styles.row}>
            <RegularText title="Item total" style={styles.text} />
            <RegularText
              title={`$${Number(cartTotal).toFixed(2).toString()}`}
              style={styles.text}
            />
          </View>
          <View style={styles.row}>
            <RegularText title="Discount" style={styles.text} />
            <RegularText
              title={`-$${Number(discount).toFixed(2).toString()}`}
              style={styles.text}
            />
          </View>
          <View style={styles.row}>
            <RegularText title="Tax" style={styles.text} />
            <RegularText
              title={`$${Number(tax).toFixed(2).toString()}`}
              style={styles.text}
            />
          </View>
          <View style={styles.row}>
            <BoldText title="Total" style={styles.Total} />
            <BoldText
              title={`$${Number(Total).toFixed(2).toString()}`}
              style={styles.Total}
            />
          </View>
          <Button title="Continue" buttonStyle={styles.button} />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginBottom: hp(34),
  },
  Total: {
    fontSize: hp(16),
    color: Colors.Black,
  },
  text: {
    fontSize: hp(14),
    color: Colors.LightPurple,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(12),
    marginHorizontal: wp(32),
  },
  divider: {
    backgroundColor: Colors.LightPurple,
    opacity: 0.5,
    marginBottom: hp(20),
    height: hp(0.5),
  },
});
