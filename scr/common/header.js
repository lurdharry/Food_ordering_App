import React from 'react';
import {StyleSheet, Platform, View, TouchableOpacity} from 'react-native';
import {hp, wp, navigate} from './utils';
import {
  BackIcon,
  Like,
  Up,
  RoundedFilter,
} from '../../assets/icons.svg/icon_svg';
import * as Colors from './colors';
import {BoldText} from './text';

export const FavHeader = ({onFavPress, navigation, isFav}) => (
  <View style={styles.headerView}>
    <TouchableOpacity onPress={() => navigation.pop()}>
      <BackIcon />
    </TouchableOpacity>
    <View style={styles.endView}>
      <TouchableOpacity onPress={onFavPress} style={{marginRight: wp(16)}}>
        <Like color={isFav ? Colors.LightPurple : Colors.LightGrey} />
      </TouchableOpacity>
      <Up />
    </View>
  </View>
);

export const Header = ({navigation, title, noRight}) => (
  <View style={styles.headerView}>
    <TouchableOpacity onPress={() => navigation.pop()}>
      <BackIcon />
    </TouchableOpacity>
    <BoldText title={title || 'Menu'} style={styles.title} />
    {noRight ? <View style={{width: 48}} /> : <RoundedFilter />}
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: hp(18),
  },
  headerView: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(24),
    paddingTop: hp(16),
    alignItems: 'center',
  },
  endView: {
    flexDirection: 'row',
  },
});
