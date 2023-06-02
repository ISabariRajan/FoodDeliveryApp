import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable,
    Image
} from "react-native";
import {COLORS, parameters, title, customStyle, fullJustify} from "global";
import { Icon } from "@rneui/themed";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import { HeaderText } from "./Text";

export const setItemId = (
    item,
    indexCheck,
    setIndexCheck,
    CardParams
) => {

    setIndexCheck(item.id)
    CardParams.indexCheck = item.id
    return CardParams
}

export const SquareCards = ({
    source,
    title,
    size,
    border_radius
}) => {
    outer_width = size * 2;
    if (border_radius === undefined)
        border_radius = size / 2;
    inner_size = size * 3/2;
    return (
        <View
            style={{
                ...fullJustify,
                borderRadius: border_radius,
                height: inner_size,
                width: inner_size,
                backgroundColor: COLORS.white

            }}
        >
            <Image
                style={{
                    height: size,
                    width: size,
                    borderRadius: border_radius
                }}
                source={source}
            />
        </View>
    );
};

export const RatingBox = ({
    params
}) => {
    /*
        RatingBox is a Card which has a star and a rating value,
        It has 3 params
        params.rating       -   The actual rating of a business or item
        params.maxrating    -   The Out of rating eg 5/10 -> here 5 is rating and 10 is maxrating
        params.scale        -   The Scale by which elements inside the box is populated
    */
    console.log("RatingBox : ", params)
    rating = params.rating
    maxrating = params.maxrating
    rating_percent = ((rating/ maxrating) * 100)
    scale = params.scale
    if(rating_percent > 80){
        style = {
            backgroundColor: "#48c479"
        }
    } else if (rating_percent > 50){
        style = {
            backgroundColor: "#ffff00"
        }
    } else {
        style = {
            backgroundColor: "#ff0000"
        }
    }
    return (
        <View style={{...style, paddingHorizontal: 6, paddingVertical:2, flexDirection:"row", alignItems: "center", height: scale * 2.5}}>
            <Icon
                type="material-community"
                name="star"
                size={scale * 1.7}
                iconStyle={{color: COLORS.white}}
            />
            <Text style={{
                paddingLeft: 3,
                fontSize: scale*1.4,
                color: COLORS.white,
                fontWeight: "bold"
            }}>{rating}</Text>
        </View>
    )
}

export const BussinessCard1 = ({
    params
}) => {
    console.log("BusinessCard1: ", params, params.cardHeight)
    item = params.item
    width = ScreenWidth;
    size = width * .8;
    height = width * .45
    radius = size * 0.02
    cardHeight = params.cardHeight
    // We allow user to change Cardheight as Required
    if(cardHeight === undefined)
        cardHeight = size * 0.2
    src = item.src
    business_categories = "DUMMY"
    business_categories = item.food_types.join(", ")
    if(typeof(src) === "number"){
        src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p3sq3amhdxtrow8r90xo"
    }
    return (
        <View style={{
            flexDirection: "column",
            height: height,
            borderWidth: 1,
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
            borderColor: COLORS.grey4
        }}>
            <Image 
                source={{uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p3sq3amhdxtrow8r90xo"}}
                resizeMode="contain"
                style={{
                    borderTopLeftRadius: radius,
                    borderTopRightRadius: radius,
                    overflow: "hidden",
                    height: height - cardHeight,
                    width: size,
                }}
            />
            <View
                style={{
                    marginHorizontal: cardHeight * .1
                }}
            >
                <Text style={{
                    fontSize: cardHeight * .2,
                    color: COLORS.black,
                    fontWeight: "bold",
                }}>
                    {item.name}
                </Text>
                <Text style={{
                    fontSize: cardHeight * .15
                }}>{business_categories}</Text>
                <View style={{
                    flexDirection: "row",
                    marginVertical: 8,
                    marginRight: 10,
                    justifyContent: "space-between"
                }}>
                    <RatingBox
                        params={{
                            rating: item.rating,
                            maxrating: item.maxrating,
                            scale: cardHeight * 0.1
                        }}
                    />
                    <Text
                        style={{
                            fontSize: cardHeight * .15,
                            textTransform: "uppercase"
                        }}
                    >{item.time}</Text>
                </View>
            </View>
        </View>
    );
}

export const SquareIconWithText = ({
    params
}) => {
    size = params.size
    item = params.item
    indexCheck = params.indexCheck
    borderRadius = params.borderRadius
    if(params.dirty === undefined){
        indexCheck = 0
    }
    isInverse = (indexCheck === item.id);
    indexTest = params.indexTest
    return (
        <View            
            style={{
                width: size * 2,
                ...fullJustify,
                borderRadius: borderRadius,
                marginHorizontal: 5,
                height: size * 5/2,
                paddingVertical: 10,
                backgroundColor: isInverse ? COLORS.primary : COLORS.grey5
            }}
        >
            <SquareCards
                size={size}
                source={item.src}
                border_radius={size}
            />
            <Text
                style={{
                    fontSize: size * 0.35,
                    color: isInverse ? COLORS.white : COLORS.black
                }}
            >{item.name}
            </Text>
        </View>
    )
}

export const HorizontalScorabbleList = ({
    title,
    data,
    showScroll,
    CardType,
    passItem,
    CardParams,
    onPress,    
}) => {
    const [indexCheck, setIndexCheck] = useState("0")
    return (
    <View>
        <HeaderText
            textVal={title}
        />
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={showScroll}
                data={data}
                keyExtractor={(item)=>item.id}
                renderItem={({item}) =>  {
                    if(passItem){
                        CardParams.item = item
                    }
                    return (
                        <TouchableOpacity
                            onPress={()=>{
                                if(onPress){
                                    CardParams = onPress(item, indexCheck, setIndexCheck, CardParams)
                                    CardParams.dirty = true
                                }
                            }}

                            style={{
                                marginLeft: 10
                            }}
                        >
                            <CardType params={CardParams}/>
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    businessHeader: {
        fontWeight: "bold",
        fontSize: 15
    },
    businessDescription: {
        fontSize: 10,
        color: COLORS.black
    },
    businessCard1Style: {
        flexDirection: "row",
        fontSize: 6,
        marginVertical: 8,
        marginRight: 10,
        justifyContent: "space-between"
    }
})