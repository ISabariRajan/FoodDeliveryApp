import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "screens/HomeScreen";
import RootClientTabs from "navigation/ClientTabs";
import { Icon } from "@rneui/themed";
import { COLORS } from "global";

const Drawer1 = createDrawerNavigator();

// export const CustomDrawerScreen1 = ({
//     props
// }) => {
//     console.log(props)
//     return (
//         <Drawer1.Screen
//             name="RootClientTabs"
//             component={RootClientTabs}
//             options={{
//                 title:"Client",
//                 headerShown: false,
//                 tabBarLabel: "Client",
//                 drawerIcon: ({focused,size}) => {
//                     return (
//                         <Icon
//                             name="home"
//                             type="material-community"
//                             size={size}
//                             color={focused ? COLORS.primary : COLORS.inverse}
//                         />
//                     )
//                 }
//             }}
//         />
//     );
// }

export const DrawerIcon1 = ({
    params
}) => {
    return (
        <Icon
            name={params.name}
            type="material-community"
            size={params.size}
            color={params.focused ? COLORS.primary : COLORS.grey1}
        />
    );
}