import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
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

const styles = StyleSheet.create({
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
    name: 'Veg Loaded',
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
