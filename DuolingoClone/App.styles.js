import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: 40,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "stretch",
    },

    optionsContainer: {
        flex: 1,
        width: "100%",

        flexWrap: "wrap",
        flexDirection: "row",

        justifyContent: "space-between",
        alignContent: "space-between"
    },


});

export default styles;