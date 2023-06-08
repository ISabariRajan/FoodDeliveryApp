import React from "react";
import {StyleSheet} from "react-native"
export const COLORS = {
    primary: "#2196f3",
    inverse: "#ffffff",

    buttons: "#ff8c52",
    grey1: "#43484d",
    grey2: "#5e6977",
    grey3: "#86939e",
    grey4: "#bdc6cf",
    grey5: "#e1e8ee",

    black:"#000000",

    cardComment: "#86939e",
    cardBackground: "white",

    white: "white"

}

export const parameters = {
    headerHeight: 40,
}

export const title = {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: "bold",
}

export const fullJustify = StyleSheet.create({
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
});

export const buttonDimensions = StyleSheet.create({
    height:40,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal:20,
    marginVertical:10,
});

export const buttonTitleDefault = StyleSheet.create({
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: -3,

});

export const small = StyleSheet.create({
    fontSize: 12,
    height: 20,
    borderRadius:9,
    paddingVertical: 1
});

export const customStyle = StyleSheet.create({
    styledButton:{
        ...fullJustify,
        ...buttonDimensions,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
   },
   buttonTitle:{
        ...fullJustify,
        ...buttonTitleDefault,
        color: COLORS.secondary,

   },
   inverseButton: {
        ...fullJustify,
        ...buttonDimensions,
        backgroundColor: COLORS.inverse,
        borderColor: COLORS.primary,
        marginRight: 10
    },
    inverseTitle:{
        ...fullJustify,
        ...buttonTitleDefault,
        color: COLORS.primary,
    }
})