import React, { FC } from "react"
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const FlagUa: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 40}
        height={height || 40}
        viewBox="0 -4 28 28"
        fill="none"
    >
        <G clipPath="url(#clip0_503_2809)">
            <Rect width={28} height={20} rx={2} fill="#fff" />
            <Mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={28}
                height={20}
            >
                <Rect width={28} height={20} rx={2} fill="#fff" />
            </Mask>
            <G mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
                <Path d="M0 10.667h28V0H0v10.667z" fill="#156DD1" />
                <Path d="M0 20h28v-9.333H0V20z" fill="#FFD948" />
            </G>
        </G>
        <Defs>
            <ClipPath id="clip0_503_2809">
                <Rect width={28} height={20} rx={2} fill="#fff" />
            </ClipPath>
        </Defs>
    </Svg>
);