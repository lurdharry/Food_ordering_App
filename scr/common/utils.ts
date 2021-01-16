import {Platform, Dimensions, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';

const CustomHeight: number = 812 - 44;
const CustomWidth: number = 375;

// const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
// const mediumRegex = new RegExp(
//   '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
// );

const hp = (value: number) => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

const wp = (value: number) => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

const isIPhoneX = () => {
  const checkHeight = hdp('100%') === 812 || hdp('100%') === 896;
  return Platform.OS === 'ios' && checkHeight;
};

/**
 * Number formatter
 * @param {Number} num
 */
const toMoney = (num: string) => {
  return parseFloat(num)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const emailValidator = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const absolute = (value: number) => {
  return Math.abs(value).toString();
};

const navigate = (This: any, ...args: any) => {
  This.props.navigation.navigate(...args);
};

//iPhoneX and StatusBar helpers
function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

function getStatusBarHeight(safe: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

const paddingTopiOS = Platform.OS === 'ios' ? getStatusBarHeight(true) : 0;

export {
  paddingTopiOS,
  getStatusBarHeight,
  ifIphoneX,
  isIphoneX,
  navigate,
  absolute,
  emailValidator,
  toMoney,
  isIPhoneX,
  hp,
  wp,
};
