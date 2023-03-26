import React, { FC } from "react"
import Svg, { G, Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const BackArrow: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 30}
        height={height || 30}
        viewBox="0 0 1024 1024"
    >
        <Path d="M768 903.232L717.568 960 256 512 717.568 64 768 120.768 364.928 512z" />
    </Svg>
);