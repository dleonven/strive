import React, { useState, useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, Authenticator } from 'aws-amplify-react-native';
import { Pressable, Keyboard, KeyboardAvoidingView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions, Alert, Button, TextInput, View, StyleSheet, Text, Animated } from 'react-native';
import { Video } from 'expo-av';
const { width, height } = Dimensions.get("window");
import SignIn  from './SignIn'
import SignUp  from './SignUp'
import Loading from '../Loading'
import { PanGestureHandler } from 'react-native-gesture-handler';
import { globalStyles } from '../GlobalStyles';

/* declared as variable (not state), as it doesn't require a re render */


const Authentication = (props: {setIsLoggedIn: Function}) => {

    const [subViewHidden, setSubViewHidden] = useState(true)

    const [counter, setCounter] = useState(0)

    const [loading, setLoading] = useState(false)

    const [route, setRoute] = useState<'' | 'signIn' | 'signUp'>('')
    

    /* initial value of the animated view is 400 (the height of the view), so it doesn't show */
    const [bounce_value, setBounceValue] = useState(new Animated.Value(400))
    
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }


        /* IF IT RUNS HERE, MEANS ITS NOT THE FIRST RENDER/UPDATE */
        toggleSubview()
    
    }, [route]);




    const toggleSubview = () => {
        /* y axis value increases from top to bottom  */
        
        /* if its not hidden, hide it */
        let toValue = 700;
        
        /* is its hidden, show it */
        if(subViewHidden) toValue = 0;
        
        //This will animate the transalteY of the subview between 0 & 100 depending on its current state
        //100 comes from the style below, which is the height of the subview.
        Animated.spring(
            bounce_value,
            {
                toValue: toValue,
                velocity: 3,
                tension: 2,
                friction: 8, 
                useNativeDriver: true
            }
        ).start();
        
        setSubViewHidden(!subViewHidden)
    }
    
    if(loading) return <Loading />
    
    return(
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-24}>

            <PanGestureHandler onGestureEvent={() => {
                Keyboard.dismiss()
                if(!subViewHidden) setRoute('')
            }}>
                <View style={styles.container}>
                    
                    <View style={styles.authButtons}>

                        {/* SIGN UP BUTTON */}
                        <Pressable
                            style={styles.signUpButton} 
                            onPress={() => setRoute('signUp')}
                        >
                            <Text style={globalStyles.copyText}>GET STARTED</Text>
                        </Pressable>

                        {/* SIGN IN BUTTON */}
                        <Text 
                            style={styles.signInButton}
                            onPress={() => setRoute('signIn')}
                        >
                            I already have an account
                        </Text>
                    </View>

                    <Pressable onPress={() => {
                        Keyboard.dismiss()
                        if(!subViewHidden) setRoute('')
                    }}>
                        {/* https://docs.expo.io/versions/latest/sdk/video/ */}
                        <Video
                            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={true}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                    </Pressable>


                    
                    {/* SUBVIEW */}
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Animated.View
                            style={[styles.subView, {transform: [{translateY: bounce_value}]}]}
                        >
                            {route === 'signIn' &&
                                <SignIn setIsLoggedIn={props.setIsLoggedIn}/>
                            }
                            {route === 'signUp' &&
                                <SignUp setRoute={setRoute}/>
                            }
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    
                </View>
            </PanGestureHandler>
        </KeyboardAvoidingView>
    )
}

export default Authentication



const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: 'black',
        //position: 'relative'
        flex: 1
    },
    authButtons: {
        zIndex: 2,
        position: 'absolute',
        bottom: '20%',
        alignSelf: 'center',
    },
    video: {
        alignSelf: 'center',
        position: 'absolute',
        height: height,
        //width: width-50,
        width: width,
        zIndex: 1,
    },
    signUpButton: {
        backgroundColor: 'white',
        width: 250,
        height: 40,
        borderRadius: 10,
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInButton: {
        color: 'white',
        alignSelf: 'center',
        textDecorationLine: 'underline'
    },
    subView: {
        zIndex: 3,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: 400,
        //marginRight: 25,
        //marginLeft: 25,
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
});