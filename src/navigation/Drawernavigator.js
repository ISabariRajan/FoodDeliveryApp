import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "screens/HomeScreen";
import RootClientTabs from "navigation/ClientTabs";
import { COLORS } from "global";
import {CustomDrawerScreen1, DrawerIcon1} from "assets/custom_components/Navigators"
import BusinessConsoleScreen from "screens/BusinessScreen";
import DrawerContent from "components/DrawerContent";

const Drawer = createDrawerNavigator();
const getOptions = (title) => {
    return {
        title: title,
        headerShown: false,
        tabBarLabel: title,
    }
}
export default function DrawerNavigator() {

    return (
        <Drawer.Navigator
            drawerContent = {props => <DrawerContent {...props}
                style={{
                    backgroundColor: COLORS.primary
                }}
            />}
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    ...getOptions("Client"),
                    drawerIcon: ({focused,size}) => <DrawerIcon1 params={{focused:focused, size:size, name:"home"}}/>
                }}
            />
            <Drawer.Screen
                name="BusinessConsoleScreen"
                component={BusinessConsoleScreen}
                options={{
                    ...getOptions("Business"),
                    drawerIcon: ({focused,size}) => <DrawerIcon1 params={{focused:focused, size:size, name:"office-building"}}/>
                }}
            />
            <Drawer.Screen
                name="DriverNavigator"
                component={RootClientTabs}
                options={{
                    ...getOptions("Driver"),
                    drawerIcon: ({focused,size}) => <DrawerIcon1 params={{focused:focused, size:size, name: "moped"}}/>
                }}
            />

        </Drawer.Navigator>
    );
}