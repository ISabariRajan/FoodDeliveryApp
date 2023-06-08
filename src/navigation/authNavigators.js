import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import SignInWelcomeScreen from "screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "screens/authScreens/SignInScreen";
import Homescreen from "screens/HomeScreen";
import RootClientTabs from "navigation/ClientTabs";
import RestaurantmapScreen from "screens/RestaurantMapScreen";
import DrawerNavigator from "navigation/Drawernavigator";

const AuthStack = createStackNavigator();

export default function AuthStackNavigator(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <AuthStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <AuthStack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <AuthStack.Screen
                name="RestaurantMapScreen"
                component={RestaurantmapScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </AuthStack.Navigator>
    )
}