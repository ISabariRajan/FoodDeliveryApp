import React from "react";
import { Icon, withBadge } from "@rneui/themed";


export const CustomIcon = ({
    badgeData,
    ...rest
}) => {
    if(badgeData === undefined)
        return (
            <Icon {...rest}/>
        )
    else
        BadgeIcon = withBadge(badgeData)(Icon)
        return (
            <BadgeIcon {...rest}/>
        )

}

export const MaterialCommunityIcon = ({
    name,
    ...rest
}) => {
    props = {
        type: "material-community",
        ...{name},
        ...rest
    }
    return (
        <CustomIcon
            {...props}
        />
    );
}