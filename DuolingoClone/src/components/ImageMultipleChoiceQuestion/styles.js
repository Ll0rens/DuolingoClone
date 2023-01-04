import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    optionsContainer: {
        flex: 1,
        width: "100%",

        flexWrap: "wrap",
        flexDirection: "row",

        justifyContent: "space-between",
        alignContent: "space-between",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "stretch",
    },
});

export default styles;