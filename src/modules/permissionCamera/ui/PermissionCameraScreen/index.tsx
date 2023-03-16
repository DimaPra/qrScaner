import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NoCameraAccess } from "../../../../../assests/icon/noCameraccess";
import { styles } from "./styles";

export const PermissionCameraScreen: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerPermission}>
                <NoCameraAccess />
                <Text style={styles.text}>You have not given permission to use the camera</Text>
                <Text style={styles.text}>Allow access by clicking on the button</Text>
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Allow access</Text>
            </TouchableOpacity>
        </View>
    );
};