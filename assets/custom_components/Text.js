import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import {COLORS, parameters, title, customStyle} from "global";

export const HeaderText = ({
    textVal
}) => {
    return (
        <View
            style={{
                backgroundColor: COLORS.grey5,
                marginVertical: 10,
                paddingHorizontal: 10
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingVertical: 2
                }}
            >{textVal}</Text>
        </View>
    )
}

export const CustomText = ({children, style, textType, ...rest}) => {
    switch (textType){
        case "bold":
            style = {
                fontWeight: "bold",
                ...style
            }
            break;
        case "inverse":
            style = {
                color: COLORS.inverse,
                ...style
            }
            break;
        case "bold-inverse":
            style = {
                color: COLORS.inverse,
                fontWeight: "bold",
                ...style
            }
            break;
    }
    console.log(style)
    return (
        <Text style={style} {...rest} >
            {children}
        </Text>
    )
}

export const BoldText = ({children, style, ...rest}) => {
    return (
        <CustomText children={children} style={style} textType={"bold"} {...rest}/>
    )
}

export const InverseText = ({children, style, ...rest}) => {
    return (
        <CustomText children={children} style={style} textType={"inverse"} {...rest}/>
    )
}

export const BoldInverseText = ({children, style, ...rest}) => {
    return (
        <CustomText children={children} style={style} textType={"bold-inverse"} {...rest}/>
    )
}