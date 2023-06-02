import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import SignInWelcomeScreen from "screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "screens/authScreens/SignInScreen";
import Homescreen from "screens/HomeScreen";

const AuthStack = createStackNavigator();

export default function AuthStackNavigator(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="HomeScreen"
                component={Homescreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
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

        </AuthStack.Navigator>
    )
}