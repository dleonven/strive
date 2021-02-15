import React, { useState, useEffect,  useRef } from 'react';
import { ScrollView } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Keyboard, KeyboardAvoidingView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions, Alert, Button, TextInput, View, StyleSheet, Text, Animated } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';


const { width, height } = Dimensions.get("window");

/* declared as variable (not state), as it doesn't require a re render */
let subViewHidden = true

const Drill = () => {
    
    const video = useRef(null);
    const [status, setStatus] = useState({});

    const [bounce_value, setBounceValue] = useState(new Animated.Value(400))
    

    const toggleSubview = () => {
        /* y axis value increases from top to bottom  */
        
        /* if its not hidden, hide it */
        let toValue = 400;
        
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
        
        subViewHidden = !subViewHidden;
    }

    
    return(
        

        <View style={styles.container}>
            <TouchableWithoutFeedback
                //activeOpacity={1} 
                onPress={() => {
                    console.log("click")
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                
                    //if(subViewHidden) return
                    //toggleSubview()    
    
                }}
            >
                        {/* https://docs.expo.io/versions/latest/sdk/video/ */}
                        <Video
                            ref={video}
                            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            isLooping
                            style={styles.video}
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        
                        
                    
                        
                        
            </TouchableWithoutFeedback>


            <Animated.View
                style={[styles.subView, {transform: [{translateY: bounce_value}]}]}
            >
            
                <View style={{
        padding: 8,
        flex: 1,
        backgroundColor: '#ecf0f1',
    }}>
                </View>

            </Animated.View>  
            
            
        </View>

        
        
    )
};

export default Drill




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
        width: width,
        zIndex: 1,
    },
    signUpButton: {
        backgroundColor: 'white',
        width: 250,
        height: 40,
        borderRadius: 10,
        marginBottom: 32
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
        marginRight: 25,
        marginLeft: 25,
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
});