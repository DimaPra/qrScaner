import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            padding:10,
        },
        header: {
            alignItems: 'center',
            height: 60,
        },
        headerText: {
            fontSize: 36,
            fontWeight: '700',
            color: colors.text
        },
        button: {
            backgroundColor: colors.button,
            marginVertical: 10,
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            borderRadius: 12,
            padding: 10,
            justifyContent: 'space-between'
        },
        text: {
            fontSize: 26,
            fontWeight: '500',
            color: colors.buttonText

        },
    });
    return styles;
}
