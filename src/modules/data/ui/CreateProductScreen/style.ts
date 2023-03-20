import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0FFFF',
    },
    item: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        color: '#000000',
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
        color: '#000000'
    },
    button: {
        width: 345,
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 10
    },
    textBtn: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
    }
});