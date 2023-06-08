import React from "react";
import { View, Text } from "react-native";
import { styles } from "components";
import { COLORS, fullJustify } from "global";
import {MaterialCommunityIcon} from "assets/custom_components/Icon";
export default function HomeHeader({
    title,
    navigation
}){
    title= "Ultimate Food"

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
                <MaterialCommunityIcon
                    withBadge={1}
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