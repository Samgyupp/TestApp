import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Text: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
        justifyContent: 'center',
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        width: windowWidth * .75,
        height: windowWidth * .5,
        marginTop: 20,
    }
});