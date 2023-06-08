import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "screens/HomeScreen";
import { COLORS } from "global";
import SearchScreen from "screens/SearchScreen";
import MyOrderScreen from "screens/MyOrderScreen";
import MyAccountScreen from "screens/MyAccountScreen";
import {MaterialCommunityIcon} from "assets/custom_components/Icon";


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return (
        <ClientTabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: COLORS.primary,
                tabBarStyle:[
                    {display: "flex"}
                ]
            }}
            // tabBarOptions={{
            //     activeTintColor: COLORS.primary
            // }}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={Homescreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({color,size}) => {
                        return (
                            <MaterialCommunityIcon
                                name="home"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            <ClientTabs.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Search",
                    tabBarIcon: ({color,size}) => {
                        return (
                            <MaterialCommunityIcon
                                name="magnify"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            <ClientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrderScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "My Orders",
                    tabBarIcon: ({color,size}) => {
                        return (
                            <MaterialCommunityIcon
                                name="view-list"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            <ClientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Account",
                    tabBarIcon: ({color,size}) => {
                        return (
                            <MaterialCommunityIcon
                                name="account"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            {/* <ClientTabs.Screen
                name="RestaurantMapScreen"
                component={RestaurantmapScreen}
                options={{
                    headerShown: false,
                }}
            /> */}
        </ClientTabs.Navigator>
    );
};