import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
    ScrollView, 
    StatusBar, 
    SafeAreaView,
    Platform,
    Pressable
 } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Easing, Keyboard, KeyboardAvoidingView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions, Alert, Button, TextInput, View, StyleSheet, Text, Animated } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import CustomFont from '../../GlobalComponents/CustomFont'
import { Fontisto, Feather } from '@expo/vector-icons'; 
import { PanGestureHandler } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";




const { width, height } = Dimensions.get("window");

/* declared as variable (not state), as it doesn't require a re render */

const Drill = (props: any) => {
    

    const [playing, setPlaying] = useState(false);
    const [animatedViewHeight, setAnimatedViewHeight] = useState(0) 
    const [isShown, setIsShown] = useState<boolean>(false)    
    const animatedController = useRef(new Animated.Value(0)).current;

    const translateY = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [animatedViewHeight-48, animatedViewHeight],
    });


    const { item } = props.route.params;    
    
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const toValue = useRef(0)
    const bounce_value = useRef(new Animated.Value(0))
    const [videoWithOpacity, setVideoWithOpacity] = useState(true)

    const onStateChange = useCallback((state) => {
        if(state === "playing") setPlaying(true);
        else if(state === "paused") setPlaying(false);
        else if(state === "ended") setPlaying(false);
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    useEffect(() => {
        toggleListItem()
    }, [playing])


    const toggleListItem = () => {

        if(isShown) {
            Animated.timing(animatedController, {
                duration: 700,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        } 
        else {
            Animated.timing(animatedController, {
                duration: 700,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        }
        
        setIsShown(!isShown);
    };



    return(
        <View style={styles.container}>
            <StatusBar translucent barStyle="light-content"  />

            <View style={{marginTop: 68}}></View>

            <Pressable 
                style={[!playing && styles.videoWithOpacity]}
                onPress={() => togglePlaying()}
                onLayout={event => {
                    const layout = event.nativeEvent.layout;
                    setAnimatedViewHeight(height - (layout.height + 68))
                  }}
            >
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"0mdidcb1GxU"}
                    onChangeState={onStateChange}
                />
            </Pressable>

            <Animated.View style={[styles.animatedView, {height: translateY}]}> 
                <SwipeableComponent />
            </Animated.View>


        </View>      
    )
};

export default Drill





const SwipeableComponent = () => {
    
    
    return(
        <View style={{
            padding: 8,
            flex: 1,
            marginLeft: 24,
            marginRight: 24
        }}>
        
            <View style={{ 
                width: 45, 
                height: 5, 
                backgroundColor: "rgb(200,199,199)",
                borderRadius: 3,
                alignSelf: 'center',
                marginTop: 16,
                marginBottom: 31
            }}>
            </View>
        
        
            <CustomFont
                font_type="BigTitle"
                text="One-Two-Thru's"
            />                     
        
            
            <CoachDetails
                name="Mike Dunn"
            />
        
            <Content
                title="Equipment"
                paragraph="2 basketballs and some floor space"
            />
            
            <Content
                title="Information"
                paragraph="Focus on using your hips and your eyes to sell the move. Step into the dribble and keep low"
            />                    
        
        </View>    
    )
    
    
}


const CoachDetails = (props: {name: string}) => {
    return(
        <View style={{
            flexDirection: 'row',
            marginTop: 16,
            backgroundColor: 'rgb(247,247,247)',
            height: 50,
            borderRadius: 4,
            justifyContent: "space-between",
            paddingLeft: 16,
            paddingRight: 16,
            alignItems: 'center'
        }}>
        
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{ 
                        width: 22, 
                        height: 22, 
                        borderRadius: 150/2,
                        marginRight: 8
                    }}
                    source={{
                        uri: "https://picsum.photos/200/300?random=1",
                    }}
                />     
                
                <CustomFont
                    font_type="CopyText"
                    text={props.name}
                    color="rgb(0,77,86)"
                /> 
                
            </View>
            
            
            
            <Level level={2}/>
                
        </View>
    )
}




const Content = (props: {title: string, paragraph: string}) => {
    return(

        <View style={{
            flexDirection: 'row',
            marginTop: 24
        }}>

            <View style={{ flex: 1 }}>
                <CustomFont
                    font_type="ContentTitle"
                    text={props.title}
                /> 
                
                <View style={{ marginTop: 8 }}>
                    <CustomFont
                        font_type="CopyText"
                        text={props.paragraph}
                        //color="rgb(84,84,84)"
                    />
                </View>
            </View>
        </View>        
        
        
    )
}


/* THIS ONE SHOULD GO TO GLOBAL COMPONENTS AND BE USED EVERYWHERE */
const Level = (props: {level: number}) => {
    return( 
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            
            <CustomFont 
                font_type={'CopySmall'} 
                text={'Level'} 
                //image_type={props.image_type} 
            />
            
            <Fontisto
                name="ellipse" 
                size={6} 
                color={props.level > 0 ? 'rgb(0,77,86)' : 'rgb(200,199,199)'} 
                style={{ marginRight: 5, marginLeft: 8 }}
            />
            
            <Fontisto 
                name="ellipse" 
                size={6} 
                color={props.level > 1 ? 'rgb(0,77,86)' : 'rgb(200,199,199)'} 
                style={{ marginRight: 5 }}
            /> 
            
            <Fontisto 
                name="ellipse" 
                size={6} 
                color={props.level > 2 ? 'rgb(0,77,86)' : 'rgb(200,199,199)'} 
            />
        </View>    
    
    )
}


const styles = StyleSheet.create({
    container: {
        //height: height,
        //width: width,
        backgroundColor: 'black',
        //paddingTop: 68,
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    videoWithOpacity: {
        opacity: 0.5
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
        height: 376,
        //marginRight: 25,
        //marginLeft: 25,
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    animatedView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },



});