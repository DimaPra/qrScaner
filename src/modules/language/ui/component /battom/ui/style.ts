import { StyleSheet } from "react-native"
import { IColors } from "../../../../../../UIProvider/theme/IColors"

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        button: {
            padding:15,
            height: 60,
            alignItems: 'center',
            flexDirection:'row',
        },
        text: {
            marginLeft:50,
            fontSize: 20,
            color: colors.text
        }
    });
    return styles
}