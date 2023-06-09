import React, {} from "react";

import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { COLORS, customStyle, images } from "global";
import Swiper from "react-native-swiper";
import {CustomButton} from "assets/custom_components";

export default function SignInWelcomeScreen({
    navigation
}){
    return (
        <View style={{flex:1}}>
            <View style={{
                    alignItems:"center",
                    flex:3,
                    justifyContent: "flex-start",
                    paddingTop: 20
                }}>
                <Text style={styles.text}>discover restaurants</Text>
                <Text style={styles.text}>in your area</Text>
            </View>
            <View style={{flex: 4, justifyContent: "center"}}>
                <Swiper autoplay={true}>
                    <View style={{...styles.slide, backgroundColor: "#491721"}}>
                        <Image
                            source={images.burger_restaurant_2}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{...styles.slide, backgroundColor: "#491721"}}>
                        <Image
                            source={images.kolo_mee}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={{...styles.slide, backgroundColor: "#4a7389"}}>
                        <Image
                            source={images.salad}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{...styles.slide, backgroundColor: "#1802fa"}}>
                        <Image
                            source={images.sarawak_laksa}
                            resizeMode="contain"
                        />
                    </View>

                </Swiper>
            </View>
            <View style={{flex: 4, justifyContent:"flex-end", marginBottom: 20}}>
                
                <CustomButton 
                    title="Sign In"
                    buttonStyle={customStyle.styledButton}
                    titleStyle={customStyle.buttonTitle}
                    onPress={()=>{
                        navigation.navigate("SignInScreen")
                    }}
                />
                <CustomButton 
                    title="Create Your account"
                    onPress={()=>console.log("AM Presses")}
                    buttonStyle={customStyle.inverseButton}
                    titleStyle={customStyle.inverseTitle}
                />

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.primary,
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})