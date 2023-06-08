import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import {COLORS, parameters, title, customStyle} from "global";
import { MaterialCommunityIcon } from "assets/custom_components/Icon";

/**
 * Exporting a React component called `CustomButton` as a named export. The component takes in props such as
 * `accessibilityState`, `children`, `onPress`, `title`, `buttonStyle`, and `titleStyle` and returns a `TouchableOpacity`
 * component with a `Text` component inside.
 * 
 * @function
 * @name CustomButton
 * @kind variable
 * @param {{ accessibilityState: any children: any onPress: any title: any buttonStyle: any titleStyle: any }} { accessibilityState, children, onPress, title, buttonStyle, titleStyle }
 * @returns {React.JSX.Element}
 * @exports
 */
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

/**
 * `export const InversibleButton = ({...})` is defining and exporting a React component called `InversibleButton` as a
 * named export. The component takes in props such as `accessibilityState`, `children`, `onPress`, `title`, `buttonStyle`,
 * `titleStyle`, and `isInverse` and returns a `TouchableOpacity` component with a `Text` component inside. This component
 * is exported so that it can be used in other parts of the application.
 * 
 * @function
 * @name InversibleButton
 * @kind variable
 * @param {{ accessibilityState: any children: any onPress: any title: any buttonStyle: any titleStyle: any isInverse: any }} { accessibilityState, children, onPress, title, buttonStyle, titleStyle, isInverse }
 * @returns {React.JSX.Element}
 * @exports
 */
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

/**
 * `export const SquareFloatingButton = ({...})` is defining and exporting a React component called `SquareFloatingButton`
 * as a named export. The component takes in props such as `title`, `size`, `icon_name`, and `onPress` and returns a `View`
 * component with a `TouchableOpacity` component inside. This component is exported so that it can be used in other parts
 * of the application.
 * 
 * @function
 * @name SquareFloatingButton
 * @kind variable
 * @param {{ title: any size: any icon_name: any onPress: any }} { title, size, icon_name, onPress }
 * @returns {React.JSX.Element}
 * @exports
 */
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
                <MaterialCommunityIcon
                    name={icon_name}
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