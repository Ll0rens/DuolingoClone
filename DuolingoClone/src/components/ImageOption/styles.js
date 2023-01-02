import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        //border
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 10,
        borderBottonWidth: 4,

        //size
        width: "48%",
        height: "48%",

        alignItems: "center",

        //spacing
        padding: 10,
        alignItems: "center",
    },

    optionImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    },

    selectedContainer: {
        backgroundColor: "#DDF4FE",
        borderColor: "#81D5FE"
    },

    optionText: {
        fontWeight: "bold",
    },
    selectedText: {
        fontWeight: "bold",
        color: "#40BEF7",
    }
})

export default styles;