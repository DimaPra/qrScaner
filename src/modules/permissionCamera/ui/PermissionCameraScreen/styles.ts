import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/theme/IColors";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        containerPermission: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
        text: {
            fontSize: 15,
            fontWeight: '900',
            color: colors.text,
        },
        button: {
            width: 200,
            height: 50,
            backgroundColor: colors.button,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
        },
        buttonText: {
            color: colors.buttonText,
            fontSize: 25,
        },
    });
    return styles;
};