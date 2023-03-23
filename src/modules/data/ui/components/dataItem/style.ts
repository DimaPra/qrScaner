import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/theme/IColors";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            paddingTop: 25,
            flexDirection: 'row',
            marginHorizontal: 20,
            width: '100%'
        },
        itemContainer: {
            backgroundColor: colors.button,
            flex: 1,
            minHeight: 130,
            padding: 10,
            borderRadius: 20,
        },
        text: {
            color: colors.buttonText,
            fontSize: 23,
            marginBottom: 10,
        },
        buttonContainer: {
            flexDirection: 'row',
        },
        button: {
            height: 30,
            width: 30,
            borderRadius: 5,
            backgroundColor: colors.button,
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText: {
            fontSize: 20,
        },
        buttonEdit: {
            flex: 1,
            height: 30,
            backgroundColor: colors.buttonEdit,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginRight: 5,
        },
        buttonDelete: {
            flex: 1,
            height: 30,
            backgroundColor: colors.buttonDelete,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginLeft: 5,
        },
    });
    return styles;
};