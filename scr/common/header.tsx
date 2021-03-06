import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {hp, wp, paddingTopiOS} from './utils';
import {
  BackIcon,
  Like,
  Up,
  RoundedFilter,
} from '../../assets/icons.svg/icon_svg';
import * as Colors from './colors';
import {BoldText} from './text';
import {CompositeNavigationProp} from '@react-navigation/native';

interface props {
  isFav?: boolean;
  navigation?: () => void;
  onFavPress?: () => void;
}

interface headerProps extends props {
  title?: string;
  noRight?: boolean;
}

export const FavHeader: React.FC<props> = ({isFav, navigation, onFavPress}) => (
  <View style={styles.headerView}>
    <TouchableOpacity onPress={navigation}>
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

export const Header: React.FC<headerProps> = ({navigation, title, noRight}) => (
  <View style={styles.headerView}>
    <TouchableOpacity onPress={navigation}>
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
    paddingTop: paddingTopiOS,
    alignItems: 'center',
  },
  endView: {
    flexDirection: 'row',
  },
});
