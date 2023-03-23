import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const DeleteItems: FC<IProps> = ({ width, height, color }) => (
    <Svg
      width={width || 30}
      height={height || 30}
      viewBox="0 0 24 24"
      fill="none"

    >
      <Path
        d="M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 01-3 3H9a3 3 0 01-3-3V7zM9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z"
        stroke={color || '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
);