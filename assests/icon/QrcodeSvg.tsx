import React, { FC } from "react"
import Svg, { G, Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const QrcodeSvg: FC<IProps> = ({ width, height, color }) => (
    <Svg
    fill={color || '#fff'}
    viewBox="0 0 512 512"
        width={37}
        height={37}
  >
    <Path d="M51.2 51.2H102.4V102.4H51.2z" fill={color || '#fff'}/>
    <Path d="M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4zm128 128H384V25.6h102.4V128z" fill={color || '#fff'}/>
    <Path d="M409.6 51.2H460.8V102.4H409.6z" fill={color || '#fff'}/>
    <Path d="M51.2 409.6H102.4V460.8H51.2z" fill={color || '#fff'}/>
    <Path d="M358.4 358.4H384V384H358.4z" fill={color || '#fff'}/>
    <Path d="M230.4 486.4H256V512H230.4z" fill={color || '#fff'}/>
    <Path d="M256 384H281.6V409.6H256z" fill={color || '#fff'}/>
    <Path d="M256 435.2H281.6V460.8H256z" fill={color || '#fff'}/>
    <Path d="M486.4 307.2H512V332.8H486.4z" fill={color || '#fff'}/>
    <Path d="M0 307.2H25.6V332.8H0z" fill={color || '#fff'}/>
    <Path d="M0 179.2H25.6V204.79999999999998H0z" 
    fill={color || '#fff'}/>
    <Path d="M281.6 25.6L281.6 51.2 230.4 51.2 230.4 76.8 307.2 76.8 307.2 51.2 307.2 25.6z" 
    fill={color || '#fff'}/>
    <Path d="M486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6H281.6v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6zm-76.8 128v76.8h-76.8v-76.8h76.8z" 
    fill={color || '#fff'}/>
    <Path d="M332.8 153.6L307.2 153.6 307.2 179.2 281.6 179.2 281.6 204.8 281.6 230.4 307.2 230.4 307.2 204.8 332.8 204.8 332.8 179.2 358.4 179.2 358.4 153.6z" 
    fill={color || '#fff'}/>
    <Path d="M281.6 486.4H332.8V512H281.6z" 
    fill={color || '#fff'}/>
    <Path d="M204.8 25.6H230.4V51.2H204.8z" 
    fill={color || '#fff'}/>
    <Path d="M409.6 204.8H435.20000000000005V230.4H409.6z" 
    fill={color || '#fff'}/>
    <Path d="M435.2 179.2H460.8V204.79999999999998H435.2z" 
    fill={color || '#fff'}/>
    <Path d="M102.4 307.2H128V332.8H102.4z" 
    fill={color || '#fff'}/>
    <Path d="M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2zm-25.6 0H25.6V384H128v102.4z" />
    <Path d="M153.6 153.6H179.2V179.2H153.6z" 
    fill={color || '#fff'}/>
    <Path d="M179.2 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0h-25.6zM128 128H25.6V25.6H128V128z" 
    fill={color || '#fff'}/>
    <Path d="M307.2 76.8H332.8V102.4H307.2z" 
    fill={color || '#fff'}/>
    <Path d="M256 0H281.6V25.6H256z" 
    fill={color || '#fff'}/>
    <Path d="M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8zM153.6 256h-51.2v-25.6h51.2V256z" 
    fill={color || '#fff'}/>
    <Path d="M230.4 409.6L230.4 384 230.4 358.4 204.8 358.4 204.8 384 179.2 384 179.2 409.6 204.8 409.6 204.8 435.2 179.2 435.2 179.2 460.8 230.4 460.8 230.4 435.2 256 435.2 256 409.6z" 
    fill={color || '#fff'}/>
    <Path d="M460.8 460.8L460.8 435.2 435.2 435.2 435.2 460.8 358.4 460.8 358.4 486.4 409.6 486.4 409.6 512 435.2 512 435.2 486.4 486.4 486.4 486.4 512 512 512 512 486.4 512 460.8z" 
    fill={color || '#fff'}/>
    <Path d="M486.4 358.4L486.4 384 460.8 384 460.8 409.6 512 409.6 512 384 512 358.4z" 
    fill={color || '#fff'}/>
  </Svg>
);