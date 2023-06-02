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