import React, { FC } from "react"
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const FlagRu: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 40}
        height={height || 40}
        viewBox="0 0 36 36"
    >
        <Path fill="#CE2028" d="M36 27a4 4 0 01-4 4H4a4 4 0 01-4-4v-4h36v4z" />
        <Path fill="#22408C" d="M0 13h36v10H0z" />
        <Path fill="#EEE" d="M32 5H4a4 4 0 00-4 4v4h36V9a4 4 0 00-4-4z" />
    </Svg>
);