import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/theme/IColors";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 5
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonSave: {

    },
    text: {
        color: colors.text,
        fontSize: 24,
        alignSelf: 'center',
        marginVertical: 5,
        marginLeft: 100,
    }
});
return styles
}