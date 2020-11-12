import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  All,
  Pisa,
  Beverages,
  Asian,
  Filter,
  Fork,
  Pot,
  Fish,
  Sun,
  Star,
  Timer,
} from '../../../assets/icons.svg/icon_svg';
import * as Colors from '../../common/colors';

import {wp, SemiBoldText, hp, MediumText, RegularText} from '../../common';

export const Types = [
  {
    key: 1,
    title: 'Best Seller',
  },
  {
    key: 2,
    title: 'Veg Pizza',
  },
  {
    key: 3,
    title: 'Pizza Mania',
  },
  {
    key: 4,
    title: 'Sides',
  },
  {
    key: 5,
    title: 'Fastfood',
  },
];

export const Categories = [
  {
    title: 'All',
    icon: <All color={Colors.LightPurple} />,
    selectedIcon: <All />,
  },
  {
    title: 'Pizza',
    icon: <Pisa />,
    selectedIcon: <Pisa color={Colors.White} />,
  },
  {
    title: 'Beverages',
    icon: <Beverages />,
    selectedIcon: <Beverages color={Colors.White} />,
  },
  {
    title: 'Asian',
    icon: <Asian />,
    selectedIcon: <Asian color={Colors.White} />,
  },
  {
    title: 'Drinks',
    icon: <Beverages />,
    selectedIcon: <Beverages color={Colors.White} />,
  },
  // {
  //   title: 'Asian',
  //   icon: <Asian />,
  //   selectedIcon: <Asian color={Colors.White} />,
  // },
  // {
  //   title: 'Asian',
  //   icon: <Asian />,
  //   selectedIcon: <Asian color={Colors.White} />,
  // },
  // {
  //   title: 'Asian',
  //   icon: <Asian />,
  //   selectedIcon: <Asian color={Colors.White} />,
  // },
  // {
  //   title: 'Asian',
  //   icon: <Asian />,
  //   selectedIcon: <Asian color={Colors.White} />,
  // },
  // {
  //   title: 'Asian',
  //   icon: <Asian />,
  //   selectedIcon: <Asian color={Colors.White} />,
  // },
];

export const PopularRes = [
  {
    name: 'Conrad food',
    icon: <Fork />,
    color: Colors.yellow,
    rating: 4.6,
    category: 'Pizza',
    time: '20',
    discount: '50',
    count: 220,
  },
  {
    name: 'SK Restro',
    icon: <Pot />,
    color: Colors.green100,
    rating: 4.4,
    category: 'Chienese',
    time: '40',
    discount: '10',
    count: 157,
  },
  {
    name: 'Black Fish',
    icon: <Fish />,
    color: Colors.Black,
    rating: 4.3,
    category: 'Seafood',
    time: '40',
    discount: '30',
    count: 103,
  },
  {
    name: 'Goichi Oniko',
    icon: <Sun />,
    color: Colors.brown100,
    rating: 4.0,
    category: 'Fastfood',
    time: '30',
    discount: '50',
    count: 500,
  },
];

export const PopularRow = ({onPress, title}) => (
  <View style={styles.row}>
    <SemiBoldText title={title} style={styles.popularText} />
    <TouchableOpacity onPress={onPress}>
      <Filter />
    </TouchableOpacity>
  </View>
);

export const RestaurantCard = ({item, navigation}) => {
  const {discount, time, category, rating, color, icon, name} = item;
  return (
    <TouchableOpacity style={styles.restaurant} onPress={navigation}>
      <View style={styles.icon_name}>
        <View style={[styles.iconContainter, {backgroundColor: color}]}>
          {icon}
        </View>
        <View style={{alignSelf: 'center'}}>
          <SemiBoldText title={name} style={styles.name} />
          <View style={styles.star_cat}>
            <Star style={styles.star} />
            <MediumText
              title={`${rating.toString()}  •`}
              style={styles.rating}
            />
            <RegularText title={`${category}  •`} style={styles.rating} />
            <Timer style={{marginBottom: hp(3)}} />
            <RegularText title={`${time} min`} style={styles.time} />
          </View>
        </View>
      </View>
      <SemiBoldText title={`${discount} % OFF`} style={styles.discount} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  time: {
    marginLeft: wp(8),
    color: Colors.LightPurple,
  },
  star: {
    marginRight: wp(5),
  },
  discount: {
    fontSize: hp(12),
    color: Colors.Purple,
  },
  rating: {
    marginRight: wp(8),
    color: Colors.LightPurple,
  },
  star_cat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: hp(16),
    marginBottom: hp(10),
  },
  icon_name: {
    flexDirection: 'row',
  },
  iconContainter: {
    height: hp(64),
    width: hp(64),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(16),
    marginRight: wp(16),
  },
  restaurant: {
    flexDirection: 'row',
    width: wp(319),
    marginLeft: wp(24),
    marginRight: wp(32),
    marginBottom: hp(30),
    justifyContent: 'space-between',
  },
  popularText: {
    fontSize: hp(18),
    color: Colors.Black,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(20),
    paddingHorizontal: wp(28),
    // alignSelf: 'flex-start',
  },
});
