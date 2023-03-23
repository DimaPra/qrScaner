import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/theme/IColors";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal:10
    },
    headerText: {
        fontSize: 32,
        fontWeight: '500',
        color: colors.text,
        marginLeft:20,
    },
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
})
return styles;
}