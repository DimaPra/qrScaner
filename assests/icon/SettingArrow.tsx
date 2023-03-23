import React, { FC } from "react"
import Svg, { G, Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const SettingArrow: FC<IProps> = ({ width, height, color }) => (
    <Svg
      width={width || 20}
      height={height || 20}
      viewBox="0 0 1024 1024"
    >
      <Path d="M256 120.768L306.432 64 768 512 306.432 960 256 903.232 659.072 512z" />
    </Svg>
);