import {CustomButton, InversibleButton} from "components/button";
import { StyleSheet } from "react-native";
import { COLORS, parameters } from "global";
import { HeaderText } from "components/Text";
import { SquareCards } from "./Cards";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        height: parameters.headerHeight,
        justifyContent: "space-between",
    },
    headerText:{
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30,
    }
})

export {styles, CustomButton, InversibleButton, HeaderText, SquareCards}