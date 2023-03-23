import React, { FC } from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
    Rect
} from "react-native-svg"
interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const FlagEn: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 40}
        height={height || 40}
        viewBox="0 -4 28 28"
        fill="none"
    >
        <G clipPath="url(#clip0_1310_7981)">
            <Path d="M28 0H0v20h28V0z" fill="url(#paint0_linear_1310_7981)" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0h28v1.333H0V0zm0 2.667h28V4H0V2.667zm0 2.666h28v1.334H0V5.333zM0 8h28v1.333H0V8zm0 2.667h28V12H0v-1.333zm0 2.666h28v1.334H0v-1.334zM0 16h28v1.333H0V16zm0 2.667h28V20H0v-1.333z"
                fill="url(#paint1_linear_1310_7981)"
            />
            <Path d="M12 0H0v9.333h12V0z" fill="url(#paint2_linear_1310_7981)" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2.667a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zm2.666 0a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zM3.333 4a.667.667 0 110-1.333.667.667 0 010 1.333zM6 4a.667.667 0 110-1.333A.667.667 0 016 4zm2.667 0a.667.667 0 110-1.333.667.667 0 010 1.333zM10 5.333A.667.667 0 1110 4a.667.667 0 010 1.333zm-2.667 0a.667.667 0 110-1.333.667.667 0 010 1.333zm-2.666 0a.667.667 0 110-1.333.667.667 0 010 1.333zM2 5.333A.667.667 0 112 4a.667.667 0 010 1.333zm1.333 1.334a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zM10 8a.667.667 0 110-1.333A.667.667 0 0110 8zM7.333 8a.667.667 0 110-1.333.667.667 0 010 1.333zM4.667 8a.667.667 0 110-1.333.667.667 0 010 1.333zM2 8a.667.667 0 110-1.333A.667.667 0 012 8z"
                fill="url(#paint3_linear_1310_7981)"
            />
        </G>
        <Defs>
            <LinearGradient
                id="paint0_linear_1310_7981"
                x1={13.9998}
                y1={0}
                x2={13.9998}
                y2={20}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#fff" />
                <Stop offset={1} stopColor="#F0F0F0" />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_1310_7981"
                x1={13.9998}
                y1={0}
                x2={13.9998}
                y2={20}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#D02F44" />
                <Stop offset={1} stopColor="#B12537" />
            </LinearGradient>
            <LinearGradient
                id="paint2_linear_1310_7981"
                x1={5.99976}
                y1={0}
                x2={5.99976}
                y2={9.33333}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#46467F" />
                <Stop offset={1} stopColor="#3C3C6D" />
            </LinearGradient>
            <LinearGradient
                id="paint3_linear_1310_7981"
                x1={5.99992}
                y1={1.33333}
                x2={5.99992}
                y2={7.99999}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#fff" />
                <Stop offset={1} stopColor="#F0F0F0" />
            </LinearGradient>
            <ClipPath id="clip0_1310_7981">
                <Rect width={28} height={20} rx={2} fill="#fff" />
            </ClipPath>
        </Defs>
    </Svg>
);