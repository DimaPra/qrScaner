import React, { FC } from "react"
import Svg, { G, Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const QrcodeSvg: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 40}
        height={height || 40}
        viewBox="0 0 26 26"
    >
        <Path d="M12 24h4v4H4v-4h4v-4h4v4zm16 0v-4h-4v4h4zM4 16v4h4v-4H4zm16 12h4v-4h-4v4zm4-16v4h4V4h-4v4h-4v4h4zm-4 4v-4h-4V8h4V4H8v4H4v4h4v4h4v4h4v4h4v-4h4v-4h-4z"
            fill={color || 'white'} />
    </Svg>
);