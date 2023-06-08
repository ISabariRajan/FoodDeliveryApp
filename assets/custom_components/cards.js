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
import { ScreenWidth } from "react-native-elements/dist/helpers";
import { HeaderText } from "assets/custom_components/Text";
import Countdown from 'react-native-countdown-component';
import { MaterialCommunityIcon } from "assets/custom_components/Icon";

/**
 * The above code is starting the definition of a function called `setItemId` and it seems that the opening parentheses of
 * the function's parameter list is missing.
 * 
 * @function
 * @name setItemId
 * @kind variable
 * @param {any} item
 * @param {any} indexCheck
 * @param {any} setIndexCheck
 * @param {any} CardParams
 * @returns {any}
 * @exports
 */
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

/**
 * The above code is starting the definition of a React component called `SquareImage`. The component takes in some props,
 * which are not specified in the code snippet. The `export` keyword indicates that this component can be imported and used
 * in other parts of the codebase. The `
 * 
 * @function
 * @name SquareImage
 * @kind variable
 * @param {{ source: any size: any border_radius: any }} { source, size, border_radius }
 * @returns {React.JSX.Element}
 * @exports
 */
export const SquareImage = ({
    source,
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
                backgroundColor: COLORS.inverse

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

/**
 * The above code is defining a React component called "RatingBox" using ES6 syntax. The component takes in props as an
 * argument and returns JSX code to render a rating box. However, the code is incomplete as there are three hash symbols (
 * 
 * @function
 * @name RatingBox
 * @kind variable
 * @param {{ params: any }} { params }
 * @returns {React.JSX.Element}
 * @exports
 */
export const RatingBox = ({
    params
}) => {

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
            <MaterialCommunityIcon
                name="star"
                size={scale * 1.7}
                iconStyle={{color: COLORS.inverse}}
            />
            <Text style={{
                paddingLeft: 3,
                fontSize: scale*1.4,
                color: COLORS.inverse,
                fontWeight: "bold"
            }}>{rating}</Text>
        </View>
    )
}

/**
 * The above code is exporting a component called "BussinessCard1" using ES6 syntax. However, the code is incomplete as
 * there are three hash symbols after the opening curly brace, which suggests that there may be more code that follows.
 * 
 * @function
 * @name BussinessCard1
 * @kind variable
 * @param {{ params: any }} { params }
 * @returns {React.JSX.Element}
 * @exports
 */
export const BussinessCard1 = ({
    params
}) => {
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

/**
 * The above code is starting the definition of a React component called `SquareImgWithText`. The component takes in props
 * and renders an image with text inside a square container. However, the code is incomplete as the `
 * 
 * @function
 * @name SquareImgWithText
 * @kind variable
 * @param {{ params: any }} { params }
 * @returns {React.JSX.Element}
 * @exports
 */
export const SquareImgWithText = ({
    params
}) => {
    /*
        SquareImage with Text will have one SquareImage and one Text, You can set borderRadius, direction and size of the Image
        It has 4 params
        params.item         -   The item which image source and name
        params.size         -   The size of SquareImage
        params.direction    -   The Direction where the Text should be displayed "top, bottom, left or right"
        params.borderRadius -   The BorderRadius of the outer Box
    */
    size = params.size
    item = params.item
    indexCheck = params.indexCheck
    borderRadius = params.borderRadius
    direction = params.direction ?? "right"

    if(params.dirty === undefined){
        indexCheck = 0
    }
    isInverse = (indexCheck === item.id);

    // These Checks are placing Text in specific Direction
    beforeTextStyle = afterTextStyle = {
        fontSize: size * 0.35,
        color: isInverse ? COLORS.inverse : COLORS.black,
        textTransform: "capitalize"
    };
    if (direction == "left" || direction == "top"){
        beforeTextStyle = {
            ...beforeTextStyle,
            display: "flex"
        }
    } else if (direction == "right" || direction == "bottom"){
        afterTextStyle = {
            ...afterTextStyle,
            display: "flex"
        }
    }
    if (direction == "left" || direction == "right"){
        directionStyle = {
            flexDirection: "row",
            width: size * 3.5,
            height: size * 1.9,
            paddingHorizontal: size / 5
        }
    } else if (direction == "top" || direction == "bottom"){
        directionStyle = {
            flexDirection: "column",
            width: size * 2,
            height: size * 5/2,
            paddingVertical: size / 5
        }
    }

    return (
        <View            
        style={{
                ...fullJustify,
                borderRadius: borderRadius,
                marginHorizontal: 5,
                backgroundColor: isInverse ? COLORS.primary : COLORS.grey5,
                justifyContent: "space-between",
                ...directionStyle,
            }}
        >
            <Text
                style={{
                    display: "none",
                    ...beforeTextStyle
                }}
            >
                {item.name}
            </Text>
            <SquareImage
                size={size}
                source={item.src}
                border_radius={size}
            />
            <Text
                style={{
                    display: "none",
                    ...afterTextStyle
                }}
            >{item.name}
            </Text>
        </View>
    )
}

/**
 * The above code is defining a React component called "CounterWithText" using ES6 syntax for exporting. However, the code
 * snippet is incomplete as it contains "
 * 
 * @function
 * @name CounterWithText
 * @kind variable
 * @param {{ options: any }} { options }
 * @returns {React.JSX.Element}
 * @exports
 */
export const CounterWithText = ({
    options
}) => {
    return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{marginLeft:15, fontSize:16, marginTop:-10, marginRight:5}}>{options.text}</Text>
        <Countdown
            until={options.until}
            size={options.size}
            timeToShow={["M", "S"]}
            timeLabels={{m: "Min", s: "Sec"}}
            digitStyle={{
                backgroundColor: COLORS.primary,
                color: COLORS.inverse
            }}
            digitTxtStyle={{color: COLORS.inverse}}
        />
    </View>
    );
}

/**
 * The above code is exporting a React component called "HorizontalScorabbleListWithHeaderAndCounter1". However, the code
 * is incomplete as there are three hash symbols (
 * 
 * @function
 * @name HorizontalScorabbleListWithHeaderAndCounter1
 * @kind variable
 * @param {{ title: any data: any showScroll: any CardType: any passItem: any CardParams: any onPress: any counterOptions: any }} { title, data, showScroll, CardType, passItem, CardParams, onPress, counterOptions }
 * @returns {React.JSX.Element}
 * @exports
 */
export const HorizontalScorabbleListWithHeaderAndCounter1 = ({
    title,
    data,
    showScroll,
    CardType,
    passItem,
    CardParams,
    onPress,
    counterOptions
}) => {
    return (
        <View>
            <HeaderText
                textVal={title}
            />
            <View>
                <CounterWithText
                    options={counterOptions}
                />
                <HorizontalScorabbleList
                    title={title}
                    showScroll={showScroll}
                    data={data}
                    CardType={CardType}
                    passItem={passItem}
                    CardParams={CardParams}
                    onPress={onPress}
                />
            </View>
        </View>
    );
};

/**
 * The above code is exporting a React component called "HorizontalScorabbleListWithHeader". However, the code is
 * incomplete as there are three hash symbols (
 * 
 * @function
 * @name HorizontalScorabbleListWithHeader
 * @kind variable
 * @param {{ title: any data: any showScroll: any CardType: any passItem: any CardParams: any onPress: any }} { title, data, showScroll, CardType, passItem, CardParams, onPress, }
 * @returns {React.JSX.Element}
 * @exports
 */
export const HorizontalScorabbleListWithHeader = ({
    title,
    data,
    showScroll,
    CardType,
    passItem,
    CardParams,
    onPress,
}) => {
    return (
        <View>
            <HeaderText
                textVal={title}
            />
            <View>
                <HorizontalScorabbleList
                    title={title}
                    showScroll={showScroll}
                    data={data}
                    CardType={CardType}
                    passItem={passItem}
                    CardParams={CardParams}
                    onPress={onPress}
                />
            </View>
        </View>
    );
}

/**
 * The above code is starting the definition of a React component called "HorizontalScorabbleList" using ES6 syntax for
 * exporting a module. However, the code is incomplete as there are three hash symbols (
 * 
 * @function
 * @name HorizontalScorabbleList
 * @kind variable
 * @param {{ data: any showScroll: any CardType: any passItem: any CardParams: any onPress: any }} { data, showScroll, CardType, passItem, CardParams, onPress, }
 * @returns {React.JSX.Element}
 * @exports
 */
export const HorizontalScorabbleList = ({
    data,
    showScroll,
    CardType,
    passItem,
    CardParams,
    onPress,    
}) => {
    const [indexCheck, setIndexCheck] = useState("0")
    return (
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