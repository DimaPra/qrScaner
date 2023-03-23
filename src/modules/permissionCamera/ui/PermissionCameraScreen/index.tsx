import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NoCameraAccess } from "../../../../../assests/icon/noCameraccess";
import { OpenSettingsButton } from "../../presenter/usePermission/usePermission";
import { styles } from "./styles";

export const PermissionCameraScreen: FC = () => {
    const { handlePress } = OpenSettingsButton()
    return (
        <View style={styles.container}>
            <View style={styles.containerPermission}>
                <NoCameraAccess />
                <Text style={styles.text}>Have not given permission to use camera</Text>
                <Text style={styles.text}>Allow access by clicking on the button</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Allow access</Text>
            </TouchableOpacity>
        </View>
    );
};