import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const ListSvg: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 40}
        height={height || 40}
        viewBox="0 0 24 24"
    >
        <Path d="M20.5 2h-17A1.502 1.502 0 0 0 2 3.5v18A1.502 1.502 0 0 0 3.5 23h17a1.502 1.502 0 0 0 1.5-1.5v-18A1.502 1.502 0 0 0 20.5 2zm.5 19.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5V16h18zM8 13v-1h8v1zM3 9V3.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5V9zm5-4h8v1H8zm8 15H8v-1h8z"
            fill={color || '#000000'} />
        <Path fill="none" d="M0 0h24v24H0z" />
    </Svg>
);