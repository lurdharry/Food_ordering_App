import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import * as Colors from './colors';
import {hp, wp, navigate} from './utils';
import {
  Home as HomeIcon,
  Cart,
  User,
  Search,
} from '../../assets/icons.svg/icon_svg';

export const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (index === 2) {
            navigation.navigate('cart');
          } else if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const RenderIcon = (edd, color) => {
          if (edd === 0) {
            return <HomeIcon color={color} />;
          }
          if (edd === 1) {
            return <Search color={color} />;
          }
          if (edd === 2) {
            return <Cart color={color} />;
          }
        };
        // const Content = isFocused => {
        //   return <View></View>;
        // };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.box,
              isFocused && {
                backgroundColor: 'rgba(109, 97, 242, 0.05)',
              },
            ]}>
            {RenderIcon(index, isFocused ? Colors.Purple : Colors.LightPurple)}
            {isFocused && <Text style={styles.label}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.Purple,
    marginLeft: wp(10),
  },
  tabContainer: {
    width: '100%',
    height: hp(96),
    flexDirection: 'row',
    backgroundColor: Colors.White,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(32),
  },
  box: {
    height: hp(48),
    width: wp(104),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: hp(18),
    marginTop: hp(16),
    marginBottom: hp(32),
  },
});
