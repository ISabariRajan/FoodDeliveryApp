import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "navigation/authNavigators";

export default function RootNavigator(){
    return (
        <NavigationContainer>
            <AuthStackNavigator />
        </NavigationContainer>
    )
}