import React from 'react';
import {StyleSheet, Platform, View, TouchableOpacity} from 'react-native';
import {hp, wp, navigate} from './utils';
import {BackIcon, Like, Up} from '../../assets/icons.svg/icon_svg';
import * as Colors from './colors';
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

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(24),
    paddingTop: hp(16),
  },
  endView: {
    flexDirection: 'row',
  },
});
