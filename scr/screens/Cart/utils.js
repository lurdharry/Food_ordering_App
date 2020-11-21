import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  wp,
  hp,
  Purple,
  RegularText,
  LightGrey,
  SemiBoldText,
  White,
  MediumText,
  Black,
  BoldText,
} from '../../common';

import {ArrowDown, Minus, Plus} from '../../../assets/icons.svg/icon_svg';
import {food4, food1, food2, food3, food5} from '../../../assets/images';

export const AddressCard = () => {
  return (
    <View style={styles.cardContainer}>
      <RegularText title="Deliver to" style={styles.deliver} />
      <View style={styles.bottom}>
        <MediumText title="242 ST Marks Eve, Finland " style={styles.address} />
        <TouchableOpacity style={styles.icon}>
          <ArrowDown />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const CartItem = ({addToCart, removeFromCart, name, price, count}) => {
  const value = Number(price).toFixed(2).toString();
  return (
    <View style={styles.foodItem}>
      <View style={styles.image_name}>
        <Image
          source={getImage(name)}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <MediumText title={name} style={styles.name} />
          <View style={styles.addBox}>
            <TouchableOpacity onPress={removeFromCart}>
              <Minus />
            </TouchableOpacity>
            <MediumText title={count.toString()} style={styles.count} />
            <TouchableOpacity onPress={addToCart}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BoldText title={`$${value}`} style={styles.amount} />
    </View>
  );
};

const getImage = name => {
  switch (name) {
    case 'Margherita':
      return food1;
    case 'Veg Loaded':
      return food2;
    case 'Tomato':
      return food5;
    case 'Fresh Veggie':
      return food4;
    case 'Veg Load':
      return food3;
    default:
      return '';
  }
};

const styles = StyleSheet.create({
  count: {
    fontSize: hp(12),
  },
  amount: {
    fontSize: hp(16),
    color: Black,
    alignSelf: 'center',
  },
  image_name: {
    flexDirection: 'row',
  },
  addBox: {
    width: wp(88),
    height: hp(32),
    borderRadius: hp(12),
    backgroundColor: LightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(12),
  },
  name: {
    fontSize: hp(16),
    color: Black,
    marginBottom: hp(8),
  },
  image: {
    height: hp(64),
    width: wp(64),
    marginRight: wp(16),
  },
  foodItem: {
    marginLeft: wp(24),
    marginRight: wp(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp(5),
    marginBottom: hp(24),
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  address: {
    color: White,
    fontSize: hp(16),
    marginTop: hp(5),
    marginRight: wp(12),
  },
  deliver: {
    fontSize: hp(14),
    color: LightGrey,
    lineHeight: hp(21),
  },
  cardContainer: {
    width: wp(343),
    paddingVertical: hp(24),
    paddingLeft: wp(32),
    backgroundColor: Purple,
    borderRadius: hp(20),
    alignSelf: 'center',
    marginVertical: hp(28),
  },
});
