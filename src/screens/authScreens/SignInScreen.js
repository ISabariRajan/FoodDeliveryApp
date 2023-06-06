import React, {useRef, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimension,
    StatusBar,
    TextInput
} from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "components/Header";
import {COLORS, parameters, title, customStyle} from "global/styles";
import {CustomButton} from "assets/custom_components";
import {usercontroller} from "controllers";
import { SocialIcon, Button } from "react-native-elements";
import { Icon } from "@rneui/themed";



export default function SignInScreen({
    navigation
}) {


    const [textInput2Focused, setTextInput2Focused] = useState("");
    const [textInput1Focused, setTextInput1Focused] = useState("");
    const username = useRef(null)
    const password = useRef(null)

    return (
        <View
            style={styles.container}
        >
            <Header
                title="My Account"
                icon="arrow-left"
                navigation={navigation}
            />

            {/* Title For SignIn/SignUp Pages */}
            <View style={{marginLeft:20, marginTop:10}}>
                <Text style={title}>
                    Sign-In
                </Text>
            </View>

            {/* Signin Page Elements */}
            <View style={{
                alignItems:"center",
                marginTop: 10
                }}>
                <Text style={styles.text}>Please Enter Email and Password</Text>
                <Text style={styles.text}>registered with your account</Text>
            </View>
            
            {/* Email and Password fields */}
            <View style={{marginTop:20}}>
                <View>
                    <TextInput
                        style={{...styles.textInput}}
                        placeholder="Username"
                        ref={username}
                        value={textInput1Focused}
                        onFocus={() => setTextInput1Focused(false)}
                        onBlur={() => setTextInput1Focused(true)}
                    />
                </View>
                <View style={{...styles.textInput,...styles.textInput2}}>
                    <Animatable.View>
                        <Icon
                            type="material-community"
                            name="lock"
                            iconStyle={{marginRight:0}}
                            />
                    </Animatable.View>

                    <TextInput
                        placeholder="Password"
                        style={{width:"80%"}}
                        ref={password}
                        value={textInput2Focused}
                        onFocus={() => setTextInput2Focused(false)}
                        onBlur={() => setTextInput2Focused(true)}
                        />

                    <Animatable.View>
                    {/* animation={textInput2Focused?"":"fadeInLeft"}  duration={800} */}
                        <Icon
                            type="material-community"
                            name="eye-off"
                            iconStyle={{marginRight:10}}
                            /> 
                    </Animatable.View>
                </View>
            </View>

            {/* Sign In Button
            <View style={{marginHorizontal:20, marginVertical:20}}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                />
            </View> 
        */}
            <CustomButton
                title="Sign In"
                buttonStyle={customStyle.styledButton}
                titleStyle={customStyle.buttonTitle}
                onPress={()=>{
                    navigation.navigate("RootClientTabs")
                    // username_val = username.current.value;
                    // password_val = password.current.value;
                    // console.log(username_val, password_val)
                    // if(username_val === undefined){
                    //     console.log("username is undefined");
                    //     return
                    // }
                    // if(password_val === undefined){
                    //     console.log("Password is undefined");
                    //     return
                    // }
                    // if(username_val.length > 0 && password_val.length > 0){
                    //     usercontroller.userlogin(username, password)
                    // }
                }}
            />

            {/* Forgot Password link */}
            
            <View style={{alignItems: "center"}}>
                <Text style={{...styles.forgotPassword, ...styles.text}}>Forgot Password?</Text>
            </View>

            <View style={{alignItems: "center", marginTop: 10, marginBottom: 20}}>
                <Text style={{fontSize:20, fontWeight:"bold", color: "#000"}}>OR</Text>
            </View>

            <View>
                <View style={{marginHorizontal:10, marginTop:5}}></View>
                <SocialIcon
                    title="Sign In with Facebook"
                    iconSize={18}
                    style={{...styles.SocialIcon}}
                    // titleStyle={parameters.socialButtonTitle}
                    type="facebook"
                    button
                ></SocialIcon>
                <SocialIcon
                    title="Sign In with Google"
                    iconSize={18}
                    style={{...styles.SocialIcon}}
                    // titleStyle={parameters.socialButtonTitle}
                    type="google"
                    button
                ></SocialIcon>
            </View>

            <View style={{marginTop: 5, marginLeft: 20}}>
                <Text style={{...styles.text}}>New on Food?</Text>
            </View>

            {/* <View style={{alignItems:"flex-end"}}>
                <Button
                    title="Create an Account"
                    buttonStyle={customStyle.inverseButton}
                    titleStyle= {customStyle.inverseTitle}
                />
            </View> */}
            <View style={{alignItems:"flex-end"}}>

                <CustomButton
                    title="Create an account"
                    buttonStyle={customStyle.inverseButton}
                    titleStyle= {{...customStyle.inverseTitle, fontSize: 12, textTransform: "capitalize", height:30, paddingVertical: 7}}
                    />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text:{
        color: COLORS.grey3,
        fontSize: 12
        // margin: 20
    },
    textInput:{
        borderWidth: 1,
        borderColor: COLORS.grey1,
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
        height: 40,
        fontSize: 15
    },
    textInput1:{
    },
    textInput2:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 0,
        // width:"100%",
    },
    button:{
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        width: "80%",
        borderRadius: 12
    },
    forgotPassword:{
        color: COLORS.grey3,
        textDecorationLine:"underline",
        marginTop: 0
    },
    SocialIcon: {
        borderRadius: 12,
        height: 45,
        marginHorizontal:20,
        // marginVertical:20,
        fontSize: 100
        // width: "80%",
        // justifyContent: "center",
        // alignContent: "center"
    },

})