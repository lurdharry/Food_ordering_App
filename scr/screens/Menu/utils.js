import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {food1, food2, food3, food4, food5} from '../../../assets/images';
import {Mark, Plus} from '../../../assets/icons.svg/icon_svg';
import {
  wp,
  hp,
  MediumText,
  RegularText,
  LightPurple,
  Purple,
  White,
  LightGrey,
  BoldText,
} from '../../common';

export const MenuFoodCard = ({source, onpress, added}) => {
  const {name, cat, price, image} = source;
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <View style={styles.nameView}>
          <MediumText title={name} style={styles.name} />
          <RegularText title={`in ${cat}`} style={styles.cat} />
          <MediumText title={`$${price}`} style={styles.price} />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.addButton,
          {backgroundColor: added ? Purple : LightGrey},
        ]}
        onPress={onpress}>
        <View style={styles.button_details}>
          <MediumText
            title={added ? 'Added' : 'Add'}
            style={added ? styles.added : styles.addText}
          />
          {added ? (
            <Mark style={styles.addIcon} />
          ) : (
            <Plus style={styles.addIcon} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const CartPreview = ({count, cartTotal, onPress}) => {
  const item = count === 1 ? '  item' : '  items';
  return (
    <View style={styles.CartPreview}>
      <Text
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BoldText title={count.toString()} style={styles.count} />
        <RegularText title={item} style={styles.item} />
      </Text>
      <BoldText title="View Cart" style={styles.viewCart} onPress={onPress} />
      <View style={styles.amountBox}>
        <MediumText
          title={`$${cartTotal.toFixed(2).toString()}`}
          style={styles.viewCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountBox: {
    height: hp(40),
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(12),
    backgroundColor: 'rgba(255,255,255,.1)',
  },
  viewCart: {
    color: White,
    fontSize: hp(14),
  },
  item: {
    color: 'rgba(255,255,255,.5)',
  },
  count: {
    color: White,
    fontSize: hp(20),
  },
  CartPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  added: {
    color: White,
    fontSize: hp(14),
  },
  addText: {
    fontSize: hp(14),
    // color: White,
  },
  addIcon: {
    marginLeft: wp(8),
  },
  button_details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    width: wp(88),
    height: hp(32),
    borderRadius: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: hp(14),
  },
  cat: {
    fontSize: hp(12),
    color: LightPurple,
  },
  name: {
    fontSize: hp(14),
  },
  nameView: {
    marginLeft: wp(16),
  },
  image: {
    height: hp(80),
    width: wp(80),
  },

  left: {
    flexDirection: 'row',
  },
  card: {
    flexDirection: 'row',
    width: wp(342),
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: hp(32),
  },
});

export const Foods = [
  {
    id: 1,
    name: 'Margherita',
    cat: 'Veg Pizza',
    price: '12.50',
    image: food1,
  },
  {
    id: 2,
    name: 'Veg Loaded',
    cat: 'Pizza Mania',
    price: '8.50',
    image: food2,
  },
  {
    id: 3,
    name: 'Veg Load',
    cat: 'Pizza Mania',
    price: '8.50',
    image: food3,
  },
  {
    id: 4,
    name: 'Fresh Veggie',
    cat: 'Pizza Mania',
    price: '11.99',
    image: food4,
  },
  {
    id: 5,
    name: 'Tomato',
    cat: 'Veg Pizza',
    price: '11.99',
    image: food5,
  },
];
