import React from "react";
import { Icon, withBadge } from "@rneui/themed";

/**
 * 
 * @param {withBadge} If the Icon requires Badge to be added, We can enter a value in this param 
 * @returns an Icon with specified props and Badge
 */
export const CustomIcon = ({
    // withBadge,
    ...props
}) => {
    try{
        if(props.withBadge === undefined)
            return (
                <Icon {...props}/>
            )
        else
            BadgeIcon = withBadge(props.withBadge)(Icon)
            return (
                <BadgeIcon {...props}/>
            )
    } catch(e){
        // console.log(props)
    }

}

/**
 * 
 * @param {name} Name of the material-community Icon
 * @returns an material-community type Icon with specified props and badge
 */
export const MaterialCommunityIcon = ({
    name,
    ...props
}) => {
    try{
        props = {
            type: "material-community",
            ...{name},
            ...props
        }
        return (
            <CustomIcon
                {...props}
            />
        );
    } catch(e){
        // console.log("ERROR")
    }
}