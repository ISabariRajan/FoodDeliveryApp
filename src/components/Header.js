import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimension,
    StatusBar
} from "react-native";
import {COLORS, parameters} from "global/styles"
import { Icon } from "@rneui/themed";
import { styles } from "components";
// import { Icon } from "react-native-elements";
// import Icon from "react-native-vector-icons/MaterialIcons";
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
                <Icon
                    type="material-community"
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
