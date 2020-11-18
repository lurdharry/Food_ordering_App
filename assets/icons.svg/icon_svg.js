import React from 'react';
import Svg, {
  Circle,
  Mask,
  Path,
  G,
  Defs,
  ClipPath,
  Rect,
} from 'react-native-svg';

export const Google = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
      fill="#FFC107"
    />
    <Path
      d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
      fill="#FF3D00"
    />
    <Path
      d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
      fill="#4CAF50"
    />
    <Path
      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
      fill="#1976D2"
    />
  </Svg>
);

export const FaceBook = props => (
  <Svg width="12" height="24" viewBox="0 0 12 24" fill="none" {...props}>
    <G clip-path="url(#clip0)">
      <Path
        d="M3.14532 24V12.7385H0.167542V8.68382H3.14532V5.2206C3.14532 2.49917 4.9043 0 8.95737 0C10.5984 0 11.8119 0.15732 11.8119 0.15732L11.7162 3.9437C11.7162 3.9437 10.4787 3.93166 9.12825 3.93166C7.66665 3.93166 7.43249 4.60522 7.43249 5.72316V8.68382H11.8324L11.641 12.7385H7.43249V24H3.14532Z"
        fill="#3B5998"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect
          width="11.6649"
          height="24"
          fill="white"
          transform="translate(0.167542)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const PasswordEyeSvg = props => (
  <Svg width={20} height={16} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.571 7.286a1.287 1.287 0 01-1.286-1.285c0-.71.577-1.286 1.286-1.286.709 0 1.286.577 1.286 1.286 0 .708-.577 1.285-1.286 1.285zm0-4.285c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.655-1.346-3-3-3zm.188 7.283c-3.69.086-6.098-3.071-6.897-4.287.88-1.376 3.094-4.192 6.521-4.28 3.676-.093 6.098 3.071 6.896 4.288-.878 1.375-3.094 4.192-6.52 4.28zm8.27-4.71c-.547-.953-3.568-5.73-8.69-5.57C3.601.124.846 4.298.114 5.574a.856.856 0 000 .853C.653 7.367 3.567 12 8.592 12c.07 0 .14 0 .211-.003 4.737-.12 7.494-4.294 8.226-5.57a.86.86 0 000-.853z"
      fill={props.color || '#C7CFD8'}
    />
  </Svg>
);

export const ClosedPasswordEyeSvg = props => (
  <Svg width={20} height={16} viewBox="0 0 17 15" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 8.75c-.703 0-1.275-.56-1.275-1.25 0-.01.003-.021.005-.032.002-.01.005-.02.005-.03l1.328 1.303c-.01 0-.02.002-.03.005-.01.002-.022.005-.033.005zM2.301.245a.861.861 0 00-1.202 0 .82.82 0 000 1.179l4.786 4.691c-.235.424-.36.895-.36 1.386 0 1.608 1.335 2.917 2.975 2.917.5 0 .981-.123 1.414-.353l4.785 4.692A.857.857 0 0015.3 15a.857.857 0 00.601-.244.821.821 0 000-1.178L2.301.244zm6.386 11.421c-3.66.084-6.048-2.985-6.84-4.168a11.248 11.248 0 011.94-2.26L2.588 4.062A13.046 13.046 0 00.113 7.086a.818.818 0 000 .83c.534.914 3.425 5.418 8.408 5.418l.21-.003a8.085 8.085 0 002.742-.558l-1.343-1.317a6.307 6.307 0 01-1.443.21zM8.27 1.67c5.08-.156 8.075 4.489 8.618 5.415.15.257.15.573 0 .83a13.076 13.076 0 01-2.476 3.025l-1.2-1.177a11.22 11.22 0 001.94-2.26c-.791-1.182-3.19-4.258-6.838-4.167-.51.012-.989.09-1.444.209L5.526 2.228A8.09 8.09 0 018.27 1.67z"
      fill={props.color || '#C7CFD8'}
    />
  </Svg>
);

export const VerifiedSvg = props => (
  <Svg width={18} height={12} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.577 4.563l-2.74 3.6a.6.6 0 01-.474.237h-.004a.6.6 0 01-.473-.23L3.427 6.306a.6.6 0 11.945-.74l.98 1.252 2.27-2.981a.6.6 0 01.955.726zM6 0a6 6 0 100 12A6 6 0 006 0z"
      fill={props.color || '#6D61F2'}
    />
  </Svg>
);

export const Location = props => (
  <Svg width="20" height="28" viewBox="0 0 20 28" fill="none" {...props}>
    <Path
      d="M10 0.666656C4.84001 0.666656 0.666672 4.83999 0.666672 9.99999C0.666672 17 10 27.3333 10 27.3333C10 27.3333 19.3333 17 19.3333 9.99999C19.3333 4.83999 15.16 0.666656 10 0.666656ZM10 13.3333C9.11595 13.3333 8.2681 12.9821 7.64298 12.357C7.01786 11.7319 6.66667 10.884 6.66667 9.99999C6.66667 9.11594 7.01786 8.26809 7.64298 7.64297C8.2681 7.01785 9.11595 6.66666 10 6.66666C10.8841 6.66666 11.7319 7.01785 12.357 7.64297C12.9821 8.26809 13.3333 9.11594 13.3333 9.99999C13.3333 10.884 12.9821 11.7319 12.357 12.357C11.7319 12.9821 10.8841 13.3333 10 13.3333Z"
      fill="#6D61F2"
    />
  </Svg>
);
export const Pisa = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18.9732 5.76938C16.7987 4.88344 14.5168 4.5 12.0001 4.5C9.48335 4.5 7.02663 4.92188 5.02038 5.75063C4.64163 5.90531 4.30507 6.1725 4.54835 6.66469C4.74569 7.06453 9.51569 17.5781 11.3279 21.3281C11.3889 21.4548 11.4845 21.5617 11.6035 21.6365C11.7226 21.7113 11.8604 21.751 12.001 21.751C12.1416 21.751 12.2794 21.7113 12.3985 21.6365C12.5175 21.5617 12.6131 21.4548 12.6741 21.3281L19.4265 6.69281C19.576 6.36937 19.4687 5.97094 18.9732 5.76938V5.76938Z"
      stroke={props.color || '#6E80B0'}
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <Path
      d="M20.4553 3.87563C18.0145 2.91 15.008 2.25 12 2.25C8.99205 2.25 6.03049 2.84906 3.53814 3.8475C3.3183 3.9375 2.90627 4.14516 3.01924 4.49438L3.47299 5.625C3.66049 6.00938 3.87939 6.00938 4.17892 6.00938C4.26283 6.00938 4.38002 5.96251 4.52017 5.90719C6.90531 4.98075 9.44128 4.50365 12 4.5C14.6606 4.5 17.3864 5.0625 19.4813 5.90626C19.6495 5.97188 19.7433 6.00844 19.8225 6.00844C20.131 6.00844 20.3091 6.1111 20.5256 5.62875L20.9836 4.5C21.0778 4.21875 20.7497 3.99282 20.4553 3.87563Z"
      stroke={props.color || '#6E80B0'}
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <Path
      d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"
      fill={props.color || '#6E80B0'}
    />
    <Path
      d="M15 11.25C15.8284 11.25 16.5 10.5784 16.5 9.75C16.5 8.92157 15.8284 8.25 15 8.25C14.1716 8.25 13.5 8.92157 13.5 9.75C13.5 10.5784 14.1716 11.25 15 11.25Z"
      fill={props.color || '#6E80B0'}
    />
    <Path
      d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z"
      fill={props.color || '#6E80B0'}
    />
  </Svg>
);

export const All = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.0938 19.5C15.0938 21.157 14.1258 22.5 12.4688 22.5H6.28125C4.62422 22.5 3.65625 21.157 3.65625 19.5"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M15.75 15.75C16.5783 15.75 17.25 16.5895 17.25 17.625C17.25 18.6605 16.5783 19.5 15.75 19.5H3C2.17172 19.5 1.5 18.6605 1.5 17.625C1.5 16.5895 2.17172 15.75 3 15.75"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M16.125 15.75H8.40516C8.30583 15.75 8.21058 15.7895 8.14031 15.8597L6.88266 17.1173C6.86524 17.1348 6.84456 17.1486 6.8218 17.158C6.79904 17.1675 6.77464 17.1723 6.75 17.1723C6.72536 17.1723 6.70096 17.1675 6.6782 17.158C6.65544 17.1486 6.63476 17.1348 6.61734 17.1173L5.35969 15.8597C5.28942 15.7895 5.19417 15.75 5.09484 15.75H2.625C2.32663 15.75 2.04048 15.6315 1.8295 15.4205C1.61853 15.2095 1.5 14.9234 1.5 14.625V14.625C1.5 14.3266 1.61853 14.0405 1.8295 13.8295C2.04048 13.6185 2.32663 13.5 2.625 13.5H16.125C16.4234 13.5 16.7095 13.6185 16.9205 13.8295C17.1315 14.0405 17.25 14.3266 17.25 14.625C17.25 14.9234 17.1315 15.2095 16.9205 15.4205C16.7095 15.6315 16.4234 15.75 16.125 15.75Z"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M3 12.9375V12.9272C3 10.3491 5.10938 9 7.6875 9H11.0625C13.6406 9 15.75 10.3594 15.75 12.9375V12.9272"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M11.2969 5.25L11.6456 8.24859"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M12 22.5H18.5302C18.9086 22.5 19.273 22.3569 19.5504 22.0995C19.8278 21.8421 19.9977 21.4894 20.0259 21.112L21.7031 5.25"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M17.25 5.25L18 2.25L20.2031 1.5"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.5 5.25H22.5"
      stroke={props.color || 'white'}
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </Svg>
);

export const Beverages = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.832 4.555C20.9325 4.4044 20.9902 4.22935 20.999 4.04852C21.0077 3.86769 20.9673 3.68786 20.8819 3.52823C20.7965 3.36861 20.6693 3.23516 20.514 3.14213C20.3587 3.0491 20.181 2.99997 20 3H4C3.81911 3.00009 3.64164 3.04925 3.48648 3.14223C3.33133 3.23521 3.20429 3.36853 3.11892 3.528C3.03354 3.68747 2.99301 3.86711 3.00166 4.04778C3.0103 4.22846 3.06779 4.40341 3.168 4.554L11 16.303V20H8V22H16V20H13V16.303L20.832 4.555ZM12 14.197L8.535 9H15.465L12 14.197ZM18.132 5L16.799 7H7.201L5.868 5H18.132Z"
      fill={props.color || '#6E80B0'}
    />
  </Svg>
);

export const Asian = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM7 18.245V13C7 12.4696 7.21071 11.9609 7.58579 11.5858C7.96086 11.2107 8.46957 11 9 11H15C15.5304 11 16.0391 11.2107 16.4142 11.5858C16.7893 11.9609 17 12.4696 17 13V18.245C18.2939 17.2091 19.234 15.7969 19.6905 14.2035C20.1471 12.6102 20.0974 10.9144 19.5485 9.35047C18.9996 7.78656 17.9784 6.43175 16.6262 5.47328C15.274 4.51481 13.6575 4 12 4C10.3425 4 8.726 4.51481 7.37378 5.47328C6.02156 6.43175 5.00043 7.78656 4.45149 9.35047C3.90256 10.9144 3.85293 12.6102 4.30946 14.2035C4.76599 15.7969 5.70615 17.2091 7 18.245Z"
      fill={props.color || '#6E80B0'}
    />
  </Svg>
);

export const Filter = props => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19 7H22"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.43115 7H13.6812"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.75 17H21.75"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.43115 17H5.43115"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16.5 9.5C17.8807 9.5 19 8.38071 19 7C19 5.61929 17.8807 4.5 16.5 4.5C15.1193 4.5 14 5.61929 14 7C14 8.38071 15.1193 9.5 16.5 9.5Z"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.25 19.5C9.63071 19.5 10.75 18.3807 10.75 17C10.75 15.6193 9.63071 14.5 8.25 14.5C6.86929 14.5 5.75 15.6193 5.75 17C5.75 18.3807 6.86929 19.5 8.25 19.5Z"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const Fork = props => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
    <Path
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="white"
    />
    <Mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40">
      <Path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95433 31.0457 2.67029e-05 20 2.67029e-05C8.9543 2.67029e-05 0 8.95433 0 20C0 31.0457 8.9543 40 20 40Z"
        fill="#333333"
      />
    </Mask>
    <G mask="url(#mask0)">
      <Path
        d="M18.7335 8.86666C18.4002 8.86666 18.0669 9.13332 18.0669 9.53332V19.6667C18.0669 20 17.8669 20.3333 17.5335 20.4C17.1335 20.4667 16.7335 20.1333 16.7335 19.7333V9.53332C16.7335 9.19999 16.4669 8.86666 16.0669 8.86666H16.0002C15.6669 8.86666 15.3335 9.13332 15.3335 9.53332V19.6667C15.3335 20 15.1335 20.3333 14.8002 20.4C14.4002 20.4667 14.0002 20.1333 14.0002 19.7333V9.53332C14.0002 9.19999 13.7335 8.86666 13.3335 8.86666C13.0002 8.86666 12.6669 9.13332 12.6669 9.53332V19.7333C12.6669 20.0667 12.4669 20.4 12.1335 20.4667C11.7335 20.5333 11.3335 20.2 11.3335 19.8V9.53332C11.3335 9.19999 11.0669 8.86666 10.6669 8.86666C10.3335 8.86666 10.0002 9.13332 10.0002 9.46666C9.93355 12.2667 9.60022 23.4667 10.0669 24.2667C10.9335 25.8 12.0669 25.8666 12.8669 27.5333C13.6669 29.2 13.8669 32.4 13.6002 36C13.1335 42.9333 11.2669 50.9333 11.9335 52.4666C12.8002 54.4 14.2002 54.4666 14.6002 54.4666C15.0002 54.4666 16.4002 54.3333 17.2669 52.4666C18.0002 50.9333 16.1335 42.9333 15.6002 36C15.3335 32.4 15.5335 29.1333 16.3335 27.5333C17.1335 25.8666 18.3335 25.8 19.1335 24.2667C19.5335 23.4667 19.2669 12.2667 19.2002 9.46666C19.3335 9.13332 19.0669 8.86666 18.7335 8.86666Z"
        fill="#211F21"
      />
      <Path
        d="M29.3334 8.06666C29.3334 7.4 28.5334 7.13333 28.1334 7.53333C27.1334 8.6 25.7334 10.4667 24.7334 13.5333C23.5334 17.3333 23.2001 28.2 24.0001 30.2C24.7334 32 25.3334 31.3333 25.8668 32.1333C26.6668 33.4666 26.4001 35 26.1334 38.6C25.6668 45.5333 23.8668 51 24.5334 52.5333C25.4001 54.4666 26.8001 54.5333 27.2001 54.5333C27.6001 54.5333 29.0001 54.4 29.8668 52.5333C30.6001 51 28.5334 34.3333 28.8001 30.3333C29.0668 28.6 29.4668 12.8667 29.3334 8.06666Z"
        fill="#211F21"
      />
    </G>
  </Svg>
);

export const Fish = props => (
  <Svg width="34" height="40" viewBox="0 0 34 40" fill="none" {...props}>
    <Path
      d="M22.0938 28.6141C18.469 27.6759 14.4178 28.4861 11.3901 31.1727C10.921 31.5991 10.4946 32.0256 10.1108 32.4947C12.9253 30.7036 16.2515 30.2345 19.3219 31.0448C19.7057 34.2004 18.8102 37.4414 16.678 40C17.1897 39.6589 17.6588 39.3177 18.1279 38.8913C21.1556 36.2047 22.5202 32.3241 22.0938 28.6141Z"
      fill="white"
    />
    <Path
      d="M17.0191 16.0768C17.872 16.3326 18.7249 16.5458 19.6204 16.6738C18.7675 16.8017 17.9146 16.887 17.0618 16.887H17.0191C16.8912 16.887 16.7632 16.887 16.6353 16.887C9.94022 16.887 4.098 13.5181 0.601196 8.4435C4.098 3.36887 9.94022 0 16.5927 0C16.7206 0 16.8485 0 16.9765 0H17.0191C17.872 0 18.7675 0.0852878 19.5777 0.21322C18.6822 0.341151 17.8293 0.554371 16.9765 0.810235C12.7121 2.08955 9.04469 4.81876 6.57135 8.4435C9.08734 12.0256 12.7121 14.7548 17.0191 16.0768Z"
      fill="white"
    />
    <Path
      d="M22.7334 0.767593C22.7334 0.767593 33.1385 3.45416 33.3944 12.9638C33.6502 22.4733 22.7334 27.2921 22.7334 27.2921C22.7334 27.2921 27.5522 20.1279 22.7334 17.4414C22.7334 17.4414 26.7846 17.1855 27.8933 19.1471C27.8933 19.1471 35.953 9.38167 22.7334 0.767593Z"
      fill="white"
    />
    <Path
      d="M15.7824 10.6183C15.7824 11.4286 15.1001 12.1109 14.2899 12.1109C13.4796 12.1109 12.7973 11.4286 12.7973 10.6183C12.7973 9.8081 13.4796 9.12579 14.2899 9.12579C15.1001 9.16844 15.7824 9.8081 15.7824 10.6183Z"
      fill="white"
    />
  </Svg>
);
export const Pot = props => (
  <Svg width="40" height="38" viewBox="0 0 40 38" fill="none" {...props}>
    <Path
      d="M39.1837 21.8716L34.1897 23.1681C34.1417 21.5835 34.1417 20.431 34.1417 20.431H20.3121H20.2641H19.7839H19.7359H5.90637C5.90637 20.431 5.85835 21.5835 5.85835 23.2162L0.816332 21.8716C0.240101 21.7276 -0.336129 23.8404 0.28812 23.9845L5.85835 25.425C5.85835 27.4899 5.85835 29.7468 6.00241 31.0913C6.29052 34.2126 7.05883 36.0373 11.3325 36.7096C15.03 37.2858 18.9676 37.2378 20.024 37.2378C21.0804 37.2858 25.018 37.2858 28.7155 36.7096C33.0372 36.0373 33.7575 34.1645 34.0456 31.0913C34.1897 29.6987 34.1897 27.4899 34.1897 25.377L39.7119 23.9364C40.3361 23.8404 39.7599 21.7276 39.1837 21.8716Z"
      fill="#01246B"
    />
    <Path
      d="M6.62667 18.6063C7.97121 16.6855 7.53903 14.5247 5.33015 13.1321C3.12127 11.7396 2.92919 9.14652 4.946 6.31339C6.29053 4.3446 5.76232 2.13572 3.55344 0.743164"
      stroke="white"
      stroke-opacity="0.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M8.73949 10.443C7.29891 9.14652 7.44297 7.32179 9.31572 5.44905C10.6603 4.10451 10.4682 2.56789 9.0276 1.27137"
      stroke="white"
      stroke-opacity="0.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M23.0012 14.1885L23.3854 13.3242C22.521 13.0361 21.9928 12.5559 22.0408 12.0757C22.1369 11.4995 23.2413 11.1633 24.5378 11.3554C25.8343 11.5475 26.7467 12.2198 26.6507 12.796C26.5546 13.2762 25.8824 13.5643 24.97 13.5643L25.066 14.4767C32.2689 15.7732 37.7911 17.9821 37.503 19.5667L9.50781 14.9568C9.79593 13.4683 15.7503 13.1321 23.0012 14.1885Z"
      fill="#01246B"
    />
    <Path
      d="M15.03 15.1969L11.5246 14.6207C12.2449 13.9484 15.1741 13.8044 18.9196 14.1885C15.03 14.1405 14.934 14.9088 15.03 15.1969Z"
      fill="white"
    />
    <Path
      d="M22.8091 12.748C22.6651 12.6039 22.6651 12.4598 22.7131 12.2678C22.8091 11.7876 23.6735 11.4995 24.6819 11.5955C24.6338 11.5955 24.5858 11.5475 24.5378 11.5475C23.4334 11.3554 22.521 11.6435 22.425 12.1237C22.3769 12.3638 22.569 12.5559 22.8091 12.748Z"
      fill="white"
    />
    <Path
      d="M16.2785 35.8452C12.2449 35.221 11.5726 33.5403 11.2845 30.7072C11.0444 28.2582 11.1885 22.832 11.2365 21.3434H6.96279C6.91477 22.784 6.81874 28.3062 7.01081 30.7552C7.29893 33.5883 7.9712 35.269 12.0048 35.8932C15.4622 36.4214 19.1117 36.3734 20.1201 36.3734C20.5522 36.3734 18.7275 36.2294 16.2785 35.8452Z"
      fill="white"
    />
  </Svg>
);
export const Sun = props => (
  <Svg width="42" height="25" viewBox="0 0 42 25" fill="none" {...props}>
    <Path
      d="M34.8286 22.5238C34.4857 14.8667 28.4286 8.77144 21 8.77144C13.5714 8.77144 7.5143 14.8667 7.17145 22.5238H34.8286Z"
      fill="white"
    />
    <Path
      d="M21 9.57145C21.505 9.57145 21.9143 9.16211 21.9143 8.65716C21.9143 8.15221 21.505 7.74287 21 7.74287C20.4951 7.74287 20.0857 8.15221 20.0857 8.65716C20.0857 9.16211 20.4951 9.57145 21 9.57145Z"
      fill="white"
    />
    <Path
      d="M35.6286 24.5429H6.37145C6.06668 24.5429 5.80002 24.2762 5.80002 23.9715C5.80002 23.6667 6.06668 23.4 6.37145 23.4H35.6286C35.9333 23.4 36.2 23.6667 36.2 23.9715C36.2 24.2762 35.9333 24.5429 35.6286 24.5429Z"
      fill="white"
    />
    <Path
      d="M20.7715 9.64764C14.6 9.64764 9.57145 14.8286 8.65717 21.3429L11.7429 21.381C12.6953 15.2095 17.4572 11.0572 20.7715 9.64764Z"
      fill="#BEBEBE"
    />
    <G opacity="0.7">
      <Path
        d="M20.9619 4.88572V1.45715"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M4.69524 21.9905H1"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M37.2667 21.9905H41"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M32.5048 10.4857L35.1333 7.85715"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M9.49524 10.4857L6.86667 7.85715"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M27.2476 6.94286L28.1619 4.73334"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M36.0476 15.7429L38.2952 14.7143"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M14.6381 6.94286L13.7238 4.73334"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M5.8381 15.7429L3.55238 14.7143"
        stroke="white"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </G>
  </Svg>
);
export const Star = props => (
  <Svg width="12" height="13" viewBox="0 0 12 13" fill="none" {...props}>
    <Path
      d="M10.9735 5.33949C10.9421 5.24692 10.8842 5.16559 10.8071 5.10552C10.73 5.04546 10.637 5.00929 10.5395 5.00149L7.68902 4.77499L6.45552 2.04449C6.41624 1.95655 6.35234 1.88185 6.27154 1.82942C6.19075 1.77699 6.0965 1.74906 6.00018 1.74901C5.90386 1.74896 5.80959 1.77678 5.72873 1.82912C5.64788 1.88147 5.5839 1.95609 5.54452 2.04399L4.31102 4.77499L1.46052 5.00149C1.36475 5.00908 1.27319 5.0441 1.1968 5.10236C1.12041 5.16062 1.06242 5.23965 1.02977 5.33001C0.997117 5.42036 0.99119 5.51821 1.01269 5.61184C1.0342 5.70548 1.08222 5.79094 1.15102 5.85799L3.25752 7.91149L2.51252 11.1375C2.4899 11.2351 2.49715 11.3373 2.53333 11.4308C2.56951 11.5243 2.63295 11.6047 2.71542 11.6617C2.79789 11.7187 2.89558 11.7496 2.99581 11.7503C3.09605 11.7511 3.19419 11.7217 3.27752 11.666L6.00002 9.85099L8.72252 11.666C8.80769 11.7225 8.90813 11.7516 9.01034 11.7494C9.11254 11.7472 9.21161 11.7137 9.29422 11.6535C9.37683 11.5932 9.43901 11.5092 9.47241 11.4125C9.5058 11.3159 9.50881 11.2114 9.48102 11.113L8.56652 7.91299L10.8345 5.87199C10.983 5.73799 11.0375 5.52899 10.9735 5.33949Z"
      fill="#FFB200"
    />
  </Svg>
);
export const Timer = props => (
  <Svg width="10" height="11" viewBox="0 0 10 11" fill="none" {...props}>
    <Path
      d="M0.0380459 5.50968C0.0380459 4.61004 0.260803 3.7782 0.706318 3.01416C1.15183 2.25011 1.75554 1.6464 2.51743 1.20304C3.27933 0.759679 4.10794 0.537998 5.00327 0.537998C5.67477 0.537998 6.31614 0.669285 6.92738 0.931859C7.53862 1.19443 8.06592 1.5474 8.50928 1.99076C8.95264 2.43413 9.30561 2.9625 9.56819 3.57589C9.83076 4.18928 9.96205 4.83388 9.96205 5.50968C9.96205 6.18118 9.83076 6.82363 9.56819 7.43702C9.30561 8.05041 8.95264 8.57771 8.50928 9.01892C8.06592 9.46013 7.53862 9.81094 6.92738 10.0714C6.31614 10.3318 5.67477 10.462 5.00327 10.462C4.32747 10.462 3.68287 10.3307 3.06948 10.0681C2.45609 9.80556 1.92772 9.45259 1.48435 9.00923C1.04099 8.56587 0.6891 8.03965 0.428678 7.43056C0.168257 6.82148 0.0380459 6.18118 0.0380459 5.50968ZM1.12923 5.50968C1.12923 6.55567 1.51018 7.46392 2.27208 8.23442C3.03397 8.99632 3.94437 9.37727 5.00327 9.37727C5.7006 9.37727 6.34628 9.20401 6.94029 8.8575C7.53431 8.51099 8.00566 8.04072 8.35432 7.4467C8.70298 6.85268 8.87731 6.20701 8.87731 5.50968C8.87731 4.81236 8.70298 4.16561 8.35432 3.56943C8.00566 2.97326 7.53431 2.50192 6.94029 2.15541C6.34628 1.8089 5.7006 1.63564 5.00327 1.63564C4.30595 1.63564 3.66027 1.8089 3.06625 2.15541C2.47223 2.50192 2.00089 2.97326 1.65223 3.56943C1.30357 4.16561 1.12923 4.81236 1.12923 5.50968ZM4.62233 5.50968V2.57187C4.62233 2.46856 4.65784 2.3814 4.72886 2.31037C4.79989 2.23935 4.88705 2.20384 4.99036 2.20384C5.09367 2.20384 5.18083 2.23935 5.25186 2.31037C5.32288 2.3814 5.35839 2.46856 5.35839 2.57187V4.87047L6.58517 4.1796C6.67126 4.12794 6.76381 4.11503 6.86281 4.14086C6.96182 4.16668 7.03499 4.22695 7.08234 4.32164C7.134 4.40773 7.14583 4.50028 7.11786 4.59928C7.08988 4.69829 7.03284 4.77362 6.94675 4.82527L5.23572 5.78087C5.16254 5.84543 5.08076 5.87772 4.99036 5.87772C4.88705 5.87772 4.79989 5.84221 4.72886 5.77118C4.65784 5.70016 4.62233 5.61299 4.62233 5.50968Z"
      fill="#6E80B0"
    />
  </Svg>
);

export const BackIcon = props => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <Rect width="48" height="48" rx="16" fill="#F8F8FA" />
    <Path
      d="M27.85 16.4917C27.7532 16.3947 27.6383 16.3177 27.5117 16.2652C27.3852 16.2127 27.2495 16.1856 27.1125 16.1856C26.9755 16.1856 26.8398 16.2127 26.7133 16.2652C26.5867 16.3177 26.4718 16.3947 26.375 16.4917L19.45 23.4167C19.3727 23.4938 19.3115 23.5853 19.2696 23.6861C19.2278 23.787 19.2063 23.895 19.2063 24.0042C19.2063 24.1133 19.2278 24.2214 19.2696 24.3222C19.3115 24.423 19.3727 24.5146 19.45 24.5917L26.375 31.5167C26.7833 31.925 27.4417 31.925 27.85 31.5167C28.2583 31.1083 28.2583 30.45 27.85 30.0417L21.8167 24L27.8583 17.9583C28.2583 17.5583 28.2583 16.8917 27.85 16.4917Z"
      fill="#18172B"
      stroke="#18172B"
      stroke-width="0.4"
    />
  </Svg>
);
export const Like = props => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <Rect width="48" height="48" rx="16" fill={props.color || '#F8F8FA'} />
    <Path
      d="M23.2751 18.6105L23.9981 19.3673L24.7212 18.6105C25.6017 17.6888 27.0006 16.5898 28.4944 16.5898C29.9221 16.5898 31.0744 17.0835 31.8673 17.875C32.66 18.6664 33.1538 19.8157 33.1538 21.2391C33.1538 22.7805 32.5543 24.0749 31.5785 25.2912C30.5834 26.5314 29.2484 27.6301 27.8331 28.7897C27.8331 28.7898 27.833 28.7898 27.833 28.7899L27.8108 28.808C26.5232 29.8626 25.1071 31.0224 23.9986 32.3231C22.9011 31.0332 21.4981 29.8824 20.2214 28.8353L20.1665 28.7902L20.1661 28.7899C18.7503 27.6298 17.4155 26.5308 16.4208 25.2906C15.4453 24.0744 14.8461 22.7801 14.8461 21.2391C14.8461 19.8157 15.3399 18.6664 16.1328 17.875C16.9257 17.0835 18.0782 16.5898 19.5064 16.5898C20.9987 16.5898 22.3938 17.688 23.2751 18.6105Z"
      stroke="#18172B"
      stroke-width="2"
    />
  </Svg>
);

export const Up = props => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <Rect width="48" height="48" rx="16" fill="#F8F8FA" />
    <Path
      d="M16 24V32C16 32.5304 16.2107 33.0391 16.5858 33.4142C16.9609 33.7893 17.4696 34 18 34H30C30.5304 34 31.0391 33.7893 31.4142 33.4142C31.7893 33.0391 32 32.5304 32 32V24"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M28 18L24 14L20 18"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M24 14V27"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const Plus = props => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M2 7H12M7 2V12V2Z"
      stroke="#6D61F2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export const Mark = props => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M12.5461 3.2037C12.929 3.58659 12.929 4.20725 12.5461 4.58995L5.97037 11.1659C5.58748 11.5486 4.967 11.5486 4.58411 11.1659L1.45379 8.03539C1.0709 7.65269 1.0709 7.03203 1.45379 6.64933C1.83649 6.26644 2.45716 6.26644 2.83986 6.64933L5.27714 9.08661L11.1599 3.2037C11.5428 2.821 12.1634 2.821 12.5461 3.2037Z"
      fill="white"
    />
  </Svg>
);

export const RoundedFilter = props => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
    <Rect width="48" height="48" rx="16" fill="#F8F8FA" />
    <Path
      d="M31 19H34"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M14.4312 19H25.6812"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M22.75 29H33.75"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M14.4312 29H17.4312"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M28.5 21.5C29.8807 21.5 31 20.3807 31 19C31 17.6193 29.8807 16.5 28.5 16.5C27.1193 16.5 26 17.6193 26 19C26 20.3807 27.1193 21.5 28.5 21.5Z"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20.25 31.5C21.6307 31.5 22.75 30.3807 22.75 29C22.75 27.6193 21.6307 26.5 20.25 26.5C18.8693 26.5 17.75 27.6193 17.75 29C17.75 30.3807 18.8693 31.5 20.25 31.5Z"
      stroke="#18172B"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
