import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from 'react-native';
import * as Colors from './colors';
import {hp, wp} from './utils';
import {MediumText} from './text';

interface typeCardProps extends TouchableOpacityProps {
  title: string;
  selected?: boolean;
}

interface catCardProps extends typeCardProps {
  Icon: ReactNode;
}

const CategoryCard: React.FC<catCardProps> = ({
  Icon,
  title,
  selected,
  ...props
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      {...props}
      style={[styles.itemView, selected && {backgroundColor: Colors.Purple}]}>
      {Icon}
    </TouchableOpacity>
    <MediumText
      title={title}
      style={[styles.title, selected && {color: Colors.Black}]}
    />
  </View>
);

const TypesCard: React.FC<typeCardProps> = ({
  title,
  selected,
  style,
  ...props
}) => (
  <TouchableOpacity
    style={[
      styles.typeView,
      selected && {backgroundColor: Colors.Purple},
      style,
    ]}
    {...props}>
    <MediumText
      title={title}
      style={[styles.typeText, selected && {color: Colors.White}]}
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
