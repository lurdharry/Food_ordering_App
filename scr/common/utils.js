import {Platform} from 'react-native';
import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';

const CustomHeight = 812 - 44;
const CustomWidth = 375;

// const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
// const mediumRegex = new RegExp(
//   '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
// );

export const hp = value => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = value => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

export const isIPhoneX = () => {
  const checkHeight = hdp('100%') === 812 || hdp('100%') === 896;
  return Platform.OS === 'ios' && checkHeight;
};

/**
 * Number formatter
 * @param {Number} num
 */
export const toMoney = num => {
  return parseFloat(num)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
//  * Naira formatter
//  * @param {Number} amount
//  */
// export const NairaFormat = amount => {
//   return accounting.formatMoney(amount, '$', 2);
// };

// /**
//  * money formatter
//  * @param {Number} amount
//  */
// export const moneyFormat = amount => {
//   return accounting.formatMoney(amount, '', 2);
// };

// export const passwordIndicator = password => {
//   if (!password.length) return '';
//   if (strongRegex.test(password)) {
//     return 'Strong Password';
//   }
//   if (mediumRegex.test(password)) {
//     return 'Medium Password';
//   }
//   return 'Weak Password';
// };

// const emailValidator = email => {
//   const re = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// };

// export const validateEmail = email => {
//   if (emailValidator(email)) {
//     return true;
//   }
//   return false;
// };

export const absolute = value => {
  return Math.abs(value).toString();
};

export const navigate = (This, ...args) => {
  This.props.navigation.navigate(...args);
};
