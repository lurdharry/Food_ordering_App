import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  All,
  Pisa,
  Beverages,
  Asian,
  Filter,
} from '../../../assets/icons.svg/icon_svg';
import * as Colors from '../../common/colors';

import {wp, SemiBoldText, hp} from '../../common';

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

export const PopularRow = ({onPress}) => (
  <View style={styles.row}>
    <SemiBoldText title="Popular Restaurents" style={styles.popularText} />
    <TouchableOpacity onPress={onPress}>
      <Filter />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
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
