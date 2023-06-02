import React, {useState} from "react";
import {
    customStyle,
    fullJustify,
    COLORS,
    small,
    // images
} from "global";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable
} from "react-native";
import HomeHeader from "components/HomeHeader";
import { CustomButton, InversibleButton, HeaderText, SquareCards } from "components";
import { Icon } from "@rneui/themed";
import { categories } from "data/food_categories";
import { color } from "@rneui/base";
import { hotels } from "data/hotel_data";
import { BussinessCard1, HorizontalScorabbleList, SquareIconWithText, setItemId } from "components/Cards";
import { Image } from "react-native-elements";
// import { FlatList } from "react-native-gesture-handler";
// import 


export default function Homescreen({navigation}){

    const [delivery, setDelivery] = useState(true)
    return (
        <View style={styles.container}>
            <HomeHeader
                title="Ultimate Food"
                navigation={navigation}
                />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator= {false}
            >
                {/* Select Button Delivery/ Pick-up */}
                <View>
                    <View style={{
                        flexDirection: "row",
                        ...fullJustify
                        
                    }}>
                        <InversibleButton
                            title="Delivery"
                            buttonStyle={{...customStyle.styledButton, ...small}}
                            titleStyle={{...small, color:COLORS.black}}
                            isInverse={delivery}
                            onPress={()=>{
                                setDelivery(true)
                            }}
                            />
                        <InversibleButton
                            title="Pick-up"
                            buttonStyle={{...customStyle.styledButton, ...small}}
                            titleStyle={{...small, color:COLORS.black}}
                            isInverse={!delivery}
                            onPress={()=>{
                                setDelivery(false)
                            }}
                            />
                    </View>
                </View>
                {/* Address and Delivery Time  */}
                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: 10
                    }}
                >
                    <View style={{
                        flexDirection: "row",
                        ...fullJustify,
                        backgroundColor: COLORS.grey4,
                        marginLeft: 0,
                        marginRight: 20,
                        marginVertical: 10,
                        borderRadius: 15,
                        flex: 8

                        // justifyContent: "space-between"
                    }}
                        >
                        <View style={{
                            flex: 2
                        }}>
                            <Icon
                                name="map-marker"
                                type="material-community"
                                size={26}
                            />
                        </View>
                        <Text style={{
                            marginVertical: 0,
                            flex: 5
                            // marginHorizontal: 20
                        }}>Some Address</Text>
                        <View 
                            style={{
                                flexDirection: "row",
                                backgroundColor: COLORS.white,
                                paddingHorizontal: 10,
                                paddingVertical: 1,
                                marginVertical: 3,
                                marginRight: 20,
                                borderRadius: 20,
                                flex:3,
                                ...fullJustify
                            }}
                        >
                            <Icon
                                name="clock-time-four"
                                type="material-community"
                            />
                            <Text>
                                Now
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{...fullJustify}}
                    >
                        <Icon
                            type="material-community"
                            name="tune"
                        />
                    </View>
                </View>
                {/* Categories -> Carousel with Mini Cards */}
                <HorizontalScorabbleList
                    title={"Categories"}
                    showScroll={false}
                    data={categories}
                    CardType={SquareIconWithText}
                    passItem={true}
                    onPress={setItemId}
                    CardParams={{
                        indexCheck: indexCheck,
                        borderRadius: 10,
                        size: 30,
                        indexTest: useState("0")
                    }}
                />
                {/* Free Delivery -> Carousel with Business Cards */}
                <HorizontalScorabbleList
                    title={"Free Delivery Now"}
                    showScroll={false}
                    data={hotels}
                    CardType={BussinessCard1}
                    passItem={true}
                    CardParams={{
                        cardHeight: 55,
                        indexTest: useState(false)
                    }}
                />
                {/* Free Delivery -> Carousel with Business Cards */}
                <HorizontalScorabbleList
                    title={"Promotions available"}
                    showScroll={false}
                    data={hotels}
                    CardType={BussinessCard1}
                    passItem={true}
                    CardParams={{
                        cardHeight: 55,
                        indexTest: useState(false)
                    }}
                />
                {/* Free Delivery -> Carousel with Business Cards */}
                <HorizontalScorabbleList
                    title={"Restaurants in your area"}
                    showScroll={false}
                    data={hotels}
                    CardType={BussinessCard1}
                    passItem={true}
                    CardParams={{
                        cardHeight: 55,
                        indexTest: useState(false)
                    }}
                />
            </ScrollView>
        </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

})