import React from "react";
import { withBadge } from "@rneui/themed";
import { View, Text } from "react-native";
import { styles } from "components";
import { COLORS, fullJustify } from "global";
import {MaterialCommunityIcon} from "assets/custom_components/Icon";
export default function HomeHeader({
    title,
    navigation
}){
    title= "Ultimate Food"
    const BadgeIcon = withBadge(10)(Icon)

    return (
        <View style={{...styles.header, justifyContent: "space-between"}}>
            <View style={{
                    marginLeft: 15,
                    ...fullJustify
                }}>
                <MaterialCommunityIcon
                    name="menu"
                    color={COLORS.inverse}
                    size={32}
                    onPress={()=>{navigation.toggleDrawer()}}
                />
            </View>
            <View style={{...fullJustify}}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={{
                    marginRight: 20,
                    ...fullJustify
                }}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    color={COLORS.inverse}
                    size={32}
                    onPress={()=>{navigation.goBack()}}
                    style={{justifyContent: "flex-end"}}
                />
            </View>
        </View>
    )
}