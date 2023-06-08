import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimension,
    StatusBar
} from "react-native";
import {COLORS, parameters} from "global/styles"
import { styles } from "components";
import {MaterialCommunityIcon} from "assets/custom_components/Icon";

export default function Header({
    title,
    icon,
    onPress,
    navigation
}){
    return (
        <View style={styles.header}>
            <View style={{
                marginLeft: 20
            }}>
                <MaterialCommunityIcon
                    name={icon}
                    color={COLORS.inverse}
                    size={28}
                    onPress={()=>{navigation.goBack()}}
                />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}
