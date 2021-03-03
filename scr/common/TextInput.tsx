import React, {useState, ReactNode} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  TextStyle,
} from 'react-native';
import {RegularText, MediumText} from './text';
import {wp, hp} from './utils';
import * as Colors from './colors';
import {
  PasswordEyeSvg,
  ClosedPasswordEyeSvg,
  VerifiedSvg,
} from '../../assets/icons.svg/icon_svg';

interface props extends TextInputProps {
  label?: string;
  error?: string;
  errorStyle?: object;
  labelStyle?: TextStyle | TextStyle[];
  editable?: boolean;
  value: string;
  onBlur?: () => void;
  onFocus?: () => void;
  inputContainerStyle?: object;
  inputStyle?: object;
  isPass?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isValid?: boolean;
  noBorder?: boolean;
  customInputStyle?: object;
}

const Input: React.FC<props> = ({
  error,
  style,
  value,
  errorStyle,
  label,
  labelStyle,
  inputStyle,
  inputContainerStyle,
  editable = true,
  isValid,
  onFocus,
  onBlur,
  leftIcon,
  rightIcon,
  placeholderTextColor,
  noBorder,
  customInputStyle,
  isPass = false,
  ...rest
}) => {
  const [isInFocus, setFocus] = useState(false);
  const [secure, setSecure] = useState(false);
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

  const handleIconPress = () => {
    if (value.length) setSecure(!secure);
  };
  return (
    <View style={inputContainerStyle}>
      {label && <MediumText title={label} style={[styles.label, labelStyle]} />}
      <View
        style={[
          styles.textInput,
          {
            backgroundColor: Colors.LightGrey,
            borderWidth: editable ? 0.5 : 0,
          },
          style,
          isInFocus && styles.isInFocus,
          noBorder && {borderWidth: 0},
          error?.length ? styles.errorContainer : null,
        ]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          {...rest}
          autoCorrect={false}
          value={value}
          editable={editable}
          style={[
            styles.input,
            inputStyle,
            value.length > 0 && styles.activeinput,
            customInputStyle,
          ]}
          placeholderTextColor={placeholderTextColor || Colors.Black}
          onFocus={handleFocus}
          secureTextEntry={secure}
          onBlur={handleBlur}
          returnKeyType="done"
        />
        {isValid && !isPass && (
          <View style={styles.icon}>
            <VerifiedSvg />
          </View>
        )}
        {isPass && (
          <TouchableOpacity onPress={handleIconPress} style={styles.icon}>
            {secure ? <ClosedPasswordEyeSvg /> : <PasswordEyeSvg />}
          </TouchableOpacity>
        )}
      </View>
      {error ? (
        <RegularText title={error} style={[styles.errorMessage, errorStyle]} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  blackCircle: {
    height: hp(10),
    width: hp(10),
    marginRight: wp(12),
    borderRadius: hp(5),
  },
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
    height: wp(78),
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
    color: 'red',
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
