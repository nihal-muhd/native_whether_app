import { StyleSheet } from "react-native";

export const basicStyle = StyleSheet.create({
    txt: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Alata-Regular'
    },
    clock: {
        alignSelf: 'flex-end'
    },
    inter: {
        alignSelf: 'flex-end',
        transform: [{ rotate: "-90deg" }],
        fontSize: 20
    },
    inter_txt: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Alata-Regular'
    },
    temp_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    temp_txt: {
        fontSize: 150,
        color: 'white'
    },

    temp_img: {
        height: 50,
        width: 50,
        backgroundColor: 'white'
    }
})