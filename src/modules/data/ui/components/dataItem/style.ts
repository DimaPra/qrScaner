import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 25,
        flexDirection: 'row',
        marginHorizontal: 20,
        width: '100%'
    },
    itemContainer: {
        backgroundColor: '#DAA520',
        borderRadius: 12,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 90,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
    },
})