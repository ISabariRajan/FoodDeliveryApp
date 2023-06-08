import React from "react";
import { Icon } from "@rneui/themed";


export const MaterialCommunityIcon = ({
    name,
    ...rest
}) => {
    return (
        <Icon
            type="material-community"
            name={name}
            {...rest}
        />
    );
}