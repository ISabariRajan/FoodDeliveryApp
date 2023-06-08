import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "screens/HomeScreen";
import RootClientTabs from "navigation/ClientTabs";
import { Icon } from "@rneui/themed";
import { COLORS } from "global";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    title:"Client",
                    headerShown: false,
                    tabBarLabel: "Client",
                    drawerIcon: ({focused,size}) => {
                        return (
                            <Icon
                                name="home"
                                type="material-community"
                                size={size}
                                color={focused ? COLORS.primary : COLORS.white}
                            />
                        )
                    }
                }}
            />
        </Drawer.Navigator>
    );
}