import React, { FC } from "react"
import { Text, View } from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner"
import {styles} from './style'
export const ScanerScrean: FC =()=>{
  const onSuccess = (e: { data: any; }) => {
    console.log(e.data);
  }
  return (
    <View style={styles.container}>
      <Text>11</Text>
      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        reactivate={true}
        reactivateTimeout={5000}
      />
    </View>
  );
}


