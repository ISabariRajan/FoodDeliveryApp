import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import {COLORS, parameters, title, customStyle} from "global";

/**
 * Exporting a functional component called `HeaderText` with a destructured prop `textVal`. The component returns a `View`
 * with a `BoldText` component inside it, which displays the `textVal` prop passed to it.
 * 
 * @function
 * @name HeaderText
 * @kind variable
 * @param {{ textVal: any }} { textVal }
 * @returns {React.JSX.Element}
 * @exports
 */
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
            <BoldText
                style={{
                    fontSize: 18,
                    paddingVertical: 2
                }}
            
            >
                {textVal}
            </BoldText>
        </View>
    )
}


/**
 * Exporting a functional component called `CustomText` with destructured props `children`, `style`, `textType`, and any
 * other props passed to it. The component returns a `Text` component with the `children` prop passed to it, and applies
 * additional styles based on the `textType` prop passed to it. If `textType` is "bold", it applies a `fontWeight` of
 * "bold" to the `style` prop. If `textType` is "inverse", it applies a `color` of `COLORS.inverse` to the `style` prop. If
 * `textType` is "bold-inverse", it applies both the `fontWeight` of "bold" and the `color` of `COLORS.inverse` to the
 * `style` prop.
 * 
 * @function
 * @name CustomText
 * @kind variable
 * @param {{ [x: string]: any children: any style: any textType: any }} { children, style, textType, ...props }
 * @returns {React.JSX.Element}
 * @exports
 */
export const CustomText = ({children, style, textType, ...props}) => {
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

    return (
        <Text style={style} {...props} >
            {children}
        </Text>
    )
}

/**
 * Exporting a functional component called `BoldText` with destructured props `children`, `style`, and any other props
 * passed to it. The component returns a `CustomText` component with the `children` and `style` props passed to it, and
 * sets the `textType` prop to "bold". This will apply a `fontWeight` of "bold" to the `style` prop of the `CustomText`
 * component.
 * 
 * @function
 * @name BoldText
 * @kind variable
 * @param {{ [x: string]: any children: any style: any }} { children, style, ...props }
 * @returns {React.JSX.Element}
 * @exports
 */
export const BoldText = ({children, style, ...props}) => {
    return (
        <CustomText children={children} style={style} textType={"bold"} {...props}/>
    )
}

/**
 * Exporting a functional component called `InverseText` with destructured props `children`, `style`, and any other props
 * passed to it. The component returns a `CustomText` component with the `children` and `style` props passed to it, and
 * sets the `textType` prop to "inverse". This will apply a `color` of `COLORS.inverse` to the `style` prop of the
 * `CustomText` component.
 * 
 * @function
 * @name InverseText
 * @kind variable
 * @param {{ [x: string]: any children: any style: any }} { children, style, ...props }
 * @returns {React.JSX.Element}
 * @exports
 */
export const InverseText = ({children, style, ...props}) => {
    return (
        <CustomText children={children} style={style} textType={"inverse"} {...props}/>
    )
}

/**
 * Exporting a functional component called `BoldInverseText` with destructured props `children`, `style`, and any other
 * props passed to it. The component returns a `CustomText` component with the `children` and `style` props passed to it,
 * and sets the `textType` prop to "bold-inverse". This will apply both a `fontWeight` of "bold" and a `color` of
 * `COLORS.inverse` to the `style` prop of the `CustomText` component.
 * 
 * @function
 * @name BoldInverseText
 * @kind variable
 * @param {{ [x: string]: any children: any style: any }} { children, style, ...props }
 * @returns {React.JSX.Element}
 * @exports
 */
export const BoldInverseText = ({children, style, ...props}) => {
    return (
        <CustomText children={children} style={style} textType={"bold-inverse"} {...props}/>
    )
}