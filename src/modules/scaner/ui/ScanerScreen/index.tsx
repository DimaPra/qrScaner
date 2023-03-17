import React, { FC } from "react"
import { ActivityIndicator, TouchableOpacity, View } from "react-native"
import { RNCamera } from "react-native-camera"
import QRCodeScanner from "react-native-qrcode-scanner"
import { FlashlightSvg } from "../../../../../assests/icon/FlashlightSvg"
import { styles } from './style'
import { useScaner } from "../../presenter/useScaner"
import { useCameraPermission } from "../../presenter/useCameraPermission"
import { PermissionCameraScreen } from "../../../permissionCamera/ui/PermissionCameraScreen"
import { RESULTS } from "react-native-permissions";

export const ScanerScrean: FC = () => {
    const { torchEnabled, toggleTorch, onSuccess } = useScaner();
    const { permissionStatus } = useCameraPermission();

    return (
        <View style={styles.container}>
            {permissionStatus === RESULTS.DENIED ? <PermissionCameraScreen /> : null}
            {permissionStatus === RESULTS.GRANTED ? <QRCodeScanner
                onRead={onSuccess}
                flashMode={torchEnabled ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                cameraStyle={styles.camera}
                cameraContainerStyle={styles.cameraContainerStyles}
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
            /> : null}
            {permissionStatus === RESULTS.UNAVAILABLE ? <ActivityIndicator size="large" color="#00ff00" /> : null}
        </View>
    );
}
