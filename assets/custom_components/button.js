import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import {COLORS, parameters, title, customStyle} from "global";
import { Icon } from "@rneui/themed";

export const CustomButton = ({
    accessibilityState,
    children,
    onPress,
    title,
    buttonStyle,
    titleStyle
}) =>{
    /* Sign In Button */
    return (

            <TouchableOpacity
                style={{...buttonStyle}}
                onPress={onPress}
            >
                <Text style={{...titleStyle}}>
                    {title}
                </Text>
            </TouchableOpacity>

    )
}

export const InversibleButton = ({
    accessibilityState,
    children,
    onPress,
    title,
    buttonStyle,
    titleStyle,
    isInverse
}) => {
    return (
        <TouchableOpacity
            style={{
                ...buttonStyle,
                backgroundColor: isInverse?COLORS.primary:COLORS.grey5,
                borderColor: isInverse?COLORS.primary:COLORS.grey5,
                
            }}
            onPress={onPress}
        >
            <Text style={{...titleStyle}}>
                {title}
            </Text>
        </TouchableOpacity>

    );
}

export const SquareFloatingButton = ({
    title,
    size,
    icon_name,
    onPress
}) => {
    return (
        <View
            style={{
                position: "absolute",
                bottom: 15,
                right: 15,
                backgroundColor: COLORS.inverse,
                width: size, height: size,
                borderRadius: size/2,
                elevation: 10,
                alignItems: "center",
                paddingTop: size/10
            }}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <Icon
                    name={icon_name}
                    type="material-community"
                    size={size/2.5}
                    color={COLORS.primary}
                />
                <Text
                    style={{fontSize: size/4}}
                >{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

// export {CustomButton};