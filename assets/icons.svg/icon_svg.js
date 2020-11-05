import React from 'react';
import Svg, {
  // Circle,
  // Mask,
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
