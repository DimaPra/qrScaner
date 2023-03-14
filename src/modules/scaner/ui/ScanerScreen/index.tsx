import React, { FC, useState } from "react"
import {TouchableOpacity, View } from "react-native"
import { RNCamera } from "react-native-camera"
import QRCodeScanner from "react-native-qrcode-scanner"
import { FlashlightSvg } from "../../../../../assests/icon/FlashlightSvg"
import {styles} from './style'
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { check, PERMISSIONS } from "react-native-permissions"
import { scanModel } from "../../../../entities/scan/ScanModel"
import { observer } from "mobx-react"


export const ScanerScrean: FC = ()=>{
  const navigation = useNavigation<NavigationProp<any>>()

  const onSuccess = (e: { data: any; }) => {
    console.log("QR Code data:" , e.data);
    scanModel.code = e.data
    navigation.navigate('Data')

  }
  
  const [torchEnabled, setTorchEnabled] = useState(false);
  const toggleTorch = () => {
    setTorchEnabled((prevState) => !prevState);
  }

  // check(PERMISSIONS.ANDROID.CAMERA)
  
  return (
      <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={torchEnabled ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}        cameraStyle={styles.cameraContainer}
        containerStyle={styles.cameraContainer}
        showMarker={true}
        markerStyle={styles.markerStyle}
        reactivate
        bottomContent={
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={toggleTorch} style={styles.bottomContent}>
              <FlashlightSvg />
            </TouchableOpacity>
          </View>
        }
      />
    </View>
    );
  }




