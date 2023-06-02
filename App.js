import React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar
} from "react-native";
import SignInScreen from "screens/authScreens/SignInScreen";
import SignInWelcomeScreen from "screens/authScreens/SignInWelcomeScreen";
import {COLORS} from "global/styles"
import RootNavigator from "navigation/RootNavigator"

export default function App(){
    return(
        <View style={styles.container}>
            <StatusBar
                barStyle = "light-content"
                backgroundColor={COLORS.primary}
            />
            <RootNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})