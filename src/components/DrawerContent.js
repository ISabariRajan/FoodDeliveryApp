import React from "react";
import {
    DrawerContentScrollView, DrawerItemList, DrawerItem
} from "@react-navigation/drawer";

import { Button, Icon, StyleSheet, View} from "react-native";
import { Avatar, Text } from "@rneui/themed";
import { COLORS, fullJustify, images } from "global";
import { DrawerIcon1} from "assets/custom_components/Navigators"
import { BoldInverseText, InverseText} from "assets/custom_components/Text";

export default function DrawerContent(props){

    return(
        <View style={{
                flex:1,
            }}>
            <DrawerContentScrollView {...props}
                style={{
                    // backgroundColor: COLORS.primary,

                }}
            >
                <View
                    style={{
                        backgroundColor: COLORS.primary,
                        paddingVertical: 10
                    }}
                >
                    <View style={{
                        alignItems:"center",
                        flexDirection: "row",
                        paddingHorizontal: 20,
                    }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={70}
                            source= {images.avatar_1}
                            />
                        <View
                            style={{
                                paddingLeft: 20,
                                }}
                                >
                            <Text>Sabari</Text>
                            <Text>
                                xxx@yyy.zzz
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            justifyContent: "space-evenly",
                            paddingTop: 10
                        }}
                    >
                        <View
                            style={{...fullJustify}}
                        >
                            <BoldInverseText>1</BoldInverseText>
                            <InverseText>My favourites</InverseText>
                        </View>
                        <View
                            style={{...fullJustify}}
                        >
                            <BoldInverseText>0</BoldInverseText>
                            <InverseText>Shopping Cart</InverseText>
                        </View>
                    </View>
                </View>
                <DrawerItemList {...props} 
                    style={{
                        backgroundColor: COLORS.inverse
                    }}
                />
                <DrawerItem
                    label ="Payment"
                    icon = {({focused,size}) => <DrawerIcon1 params={{focused:focused, size:size, name: "credit-card-outline"}}/>}
                />
                <DrawerItem
                    label ="Promotions"
                    icon = {({focused,size}) => <DrawerIcon1 params={{focused:focused, size:size, name: "ticket-percent"}}/>}
                />
                <DrawerItem
                    label ="Settings"
                    icon = {({focused,size}) => <DrawerIcon1 params={{focused:focused, size:size, name: "cogs"}}/>}
                />
                <DrawerItem
                    label ="Help"
                    icon = {({focused,size}) => <DrawerIcon1 params={{focused:focused, size:size, name: "help"}}/>}
                />
                <View>
                    
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar:{
        borderWidth: 4,
        borderColor: COLORS.inverse
    }
})