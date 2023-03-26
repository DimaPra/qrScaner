import { FC, useCallback, useMemo } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { NoCameraAccess } from "../../../../../assests/icon/noCameraccess";
import { useUiContext } from "../../../../UIProvider";
import { usePermissionCamera } from "../../presenter/usePermission/usePermission";
import { getStyle } from "./styles";

export const PermissionCameraScreen: FC = () => {
    const { t } = useUiContext();
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const handlePress = useCallback(async () => {
        await Linking.openSettings();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.containerPermission}>
                <NoCameraAccess color={colors.icon} />
                <Text style={styles.text}>{t('have_not_permission')}</Text>
                <Text style={styles.text}>{t('allow_access')}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>{t('allow')}</Text>
            </TouchableOpacity>
        </View>
    );
};