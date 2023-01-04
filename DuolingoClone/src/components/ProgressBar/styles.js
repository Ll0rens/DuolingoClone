import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "lightgrey",
        height: 30,
        borderRadius: 15,
        flex: 1,
    },
    fg: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: "#FAC800"
    },
    highlight: {
        backgroundColor: "#FAD131",
        width: "90%",
        height: 5,
        borderRadius: 5,
        marginTop: 5,
        alignSelf: "center",
    }
})

export default styles;