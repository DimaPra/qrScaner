import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        item: {
            borderColor: colors.border,
            borderWidth: 1,
            width: '100%',
            borderRadius: 10,
            color: colors.text,
            fontSize: 20,
        },
        containerInput: {
            justifyContent: 'center',
            marginHorizontal: 20,
            marginBottom: 10,
            marginTop: 10
        },
        text: {
            fontSize: 24,
            marginBottom: 20,
            color: colors.text
        },
        button: {
            width: 345,
            height: 40,
            backgroundColor: colors.button,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            alignSelf: 'center',
            marginBottom: 10
        },
        textBtn: {
            fontSize: 22,
            fontWeight: '700',
            color: colors.buttonText,
        }
    });
    return styles;
};