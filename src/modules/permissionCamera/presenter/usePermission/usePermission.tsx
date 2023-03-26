import { useEffect } from "react";
import { PermissionsAndroid } from "react-native";

export const usePermissionCamera = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message: 'ExampleApp needs access to your camera ',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission granted');
        } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
            console.log('Camera permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
};