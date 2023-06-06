import { StyleSheet } from "react-native";
import { COLORS, parameters } from "global";
import { HeaderText } from "assets/custom_components/Text";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        height: parameters.headerHeight,

    },
    headerText:{
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30,
    }
})

export {styles, HeaderText}