import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const NoCameraAccess: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 120}
        height={height || 120}
        viewBox="0 0 24 24"
    >
        <Path
            fillRule="evenodd"
            d="M11 13h1a3 3 0 0 0-6 0h1a2 2 0 0 1 4 0Zm-2 5A9 9 0 1 0 9 0a9 9 0 0 0 0 18Zm0-1A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
    </Svg>
);