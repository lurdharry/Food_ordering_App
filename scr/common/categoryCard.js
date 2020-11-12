import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import * as Colors from './colors';
import {hp, wp} from './utils';
import {MediumText} from './text';

const CategoryCard = ({Icon, title, onPress, selected}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.itemView, selected && {backgroundColor: Colors.Purple}]}
      onPress={onPress}>
      {Icon}
    </TouchableOpacity>
    <MediumText
      title={title}
      style={[styles.title, selected && {color: Colors.Black}]}
    />
  </View>
);

const TypesCard = ({onPress, selected, title}) => (
  <TouchableOpacity
    style={[styles.typeView, selected && {backgroundColor: Colors.Purple}]}
    onPress={onPress}>
    <MediumText
      style={[styles.typeText, selected && {color: Colors.White}]}
      title={title}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  typeText: {
    color: Colors.Black,
    fontSize: hp(12),
  },
  typeView: {
    width: wp(100),
    height: hp(40),
    alignItems: 'center',
    borderRadius: hp(12),
    justifyContent: 'center',
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: hp(12),
    marginTop: hp(8),
    color: Colors.LightPurple,
    alignSelf: 'center',
  },
  container: {
    alignSelf: 'center',
    marginRight: wp(28),
  },
  itemView: {
    height: hp(56),
    width: hp(56),
    borderRadius: hp(20),
    backgroundColor: Colors.LightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {CategoryCard, TypesCard};
