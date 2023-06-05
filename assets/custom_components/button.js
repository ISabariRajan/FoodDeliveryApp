import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import {COLORS, parameters, title, customStyle} from "global";


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

)
}

// export {CustomButton};