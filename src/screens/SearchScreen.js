import { COLORS, fullJustify } from "global";
import React from "react";
import {MaterialCommunityIcon} from "assets/custom_components/Icon";

import {
    View, Text, Stylesheet, TextInput
} from "react-native";
import * as Animatable from "react-native-animatable";


export default function SearchScreen(){

    return (
        <View>
            <View
                style={{
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 15,
                    flexDirection: "row",
                    ...fullJustify,
                    justifyContent: "space-between",
                    paddingHorizontal: 10
                }}
            >
                <Animatable.View>
                    <MaterialCommunityIcon
                        name="magnify"
                    />
                </Animatable.View>

                <View>
                </View>
                <TextInput
                    style={{
                        width: "90%"
                    }}
                    placeholder="Search"
                />
                <View></View>
            </View>
        </View>
    )
}