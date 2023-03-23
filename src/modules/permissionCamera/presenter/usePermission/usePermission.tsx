import { useCallback } from "react";
import { Linking } from "react-native";

export const OpenSettingsButton = () => {
    const handlePress = useCallback(async () => {
        await Linking.openSettings();
    }, []);

    return { handlePress };
};