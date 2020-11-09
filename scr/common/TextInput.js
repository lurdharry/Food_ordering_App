import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {RegularText, BoldText, SemiBoldText, MediumText} from './text';
import {hp, wp} from './utils';
import * as Colors from './colors';

/**
 *
 * error - error
 * neutral - onLeaveFocus
 * onFocus  - onfocus
 */
const Input = ({
  error,
  style,
  value,
  keyboardType,
  placeholder,
  errorStyle,
  label,
  labelStyle,
  inputStyle,
  inputContainerStyle,
  isEditable = true,
  isValid,
  onChange,
  onChangeText,
  maxLength,
  onFocus,
  onBlur,
  leftIcon,
  rightIcon,
  placeholderTextColor,
  noBorder,
  customInputStyle,
  ...rest
}) => {
  const [isInFocus, setFocus] = useState(false);
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    setFocus(false);
  };
  return (
    <View style={inputContainerStyle}>
      {label && <MediumText title={label} style={[styles.label, labelStyle]} />}
      <View
        style={[
          styles.textInput,
          {
            backgroundColor: Colors.LightGrey,
            borderWidth: isEditable ? 0.5 : 0,
          },
          style,
          isInFocus && styles.isInFocus,
          noBorder && {borderWidth: 0},
          error && styles.errorContainer,
        ]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          {...rest}
          autoCorrect={false}
          value={value}
          placeholder={placeholder}
          editable={isEditable}
          style={[
            styles.input,
            inputStyle,
            value.length && styles.activeinput,
            customInputStyle,
          ]}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChange={onChange}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor || Colors.Black}
          onFocus={handleFocus}
          onBlur={handleBlur}
          returnKeyType="done"
        />
        {isValid && (
          <View style={styles.icon}>
            <VerifiedSvg />
          </View>
        )}
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
      {error ? (
        <RegularText title={error} style={[styles.errorMessage, errorStyle]} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: Colors.Black,
    fontSize: hp(14),
    marginBottom: hp(10),
  },
  textInput: {
    fontSize: hp(14),
    backgroundColor: 'white',
    height: hp(56),
    borderColor: Colors.LightGrey,
    borderRadius: hp(18),

    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    fontStyle: 'normal',
  },
  input: {
    fontSize: hp(14),
    fontFamily: 'Poppins-Regular',
    color: Colors.Black,
    fontStyle: 'normal',

    width: wp(327),
  },
  activeinput: {
    fontFamily: 'Poppins-Medium',
    color: Colors.Black,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: wp(-38),
  },
  leftIcon: {
    alignSelf: 'center',
    marginRight: wp(12),
  },
  errorMessage: {
    // color: Colors.Red,
    marginTop: hp(13),
  },

  isInFocus: {
    borderColor: Colors.Purple,
    borderWidth: 1,
  },
  errorContainer: {
    borderWidth: 1,
    // borderColor: Colors.Red,
  },
});

export {Input as TextInput};
