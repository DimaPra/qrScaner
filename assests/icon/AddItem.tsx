import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const AddItem: FC<IProps> = ({ width, height, color }) => (
    <Svg
      width={width || 55}
      height={height || 60}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M7 12h5m0 0h5m-5 0V7m0 5v5"
        stroke={color || "#fff"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color || '#fff'}
      />
    </Svg>
);