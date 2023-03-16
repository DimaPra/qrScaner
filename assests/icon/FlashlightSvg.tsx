import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const FlashlightSvg: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={40}
        height={40}
        viewBox="0 0 23 23"
        color={'#DEB887'}
    >
        <Path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12zM6 6h12M12 12h0"
            fill={'#DEB887'} />
    </Svg>
);