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
import CustomFont from '../../GlobalComponents/CustomFont'
import { Fontisto, Feather } from '@expo/vector-icons'; 


const { width, height } = Dimensions.get("window");

/* declared as variable (not state), as it doesn't require a re render */

const Drill = () => {
    
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [firstClick, setFirstClick] = useState(true)
    
    /* initial value of the animated view is 400 (the height of the view), so it doesn't show */
    //const [bounce_value, setBounceValue] = useState(0)
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))
    const [smallSubView, setSmallSubView] = useState(true)





    /* IF  */
    useEffect(() => {
        if(status.isPlaying) setAnimatedValue(new Animated.Value(249)) 
    }, [status.isPlaying])   

    useEffect(() => {
        if((animatedValue as any)._value === 0) video.current.pauseAsync()
    }, [animatedValue])   

    
    
    
    

    const toggleSubview = () => {
        /* y axis value increases from top to bottom  */
        
        
        if((animatedValue as any)._value === 0) setAnimatedValue(new Animated.Value(249))
        else if((animatedValue as any)._value === 249) setAnimatedValue(new Animated.Value(0))
        
        
        /* if its big, make it small */
        //let toValue = 249;
        
        /* is its small, make it big */
        //if(smallSubView) toValue = 0;
        //if(animatedValue === 249) {
          //  setAnimatedValue(new Animated.Value(0))
            //setSmallSubView
        //}
        //else setAnimatedValue(new Animated.Value(249));
        //This will animate the transalteY of the subview between 0 & 100 depending on its current state
        //100 comes from the style below, which is the height of the subview.
        /*Animated.spring(
            animatedValue,
            {
                toValue: toValue,
                friction: 8, 
                tension: 30,
                velocity: 6,
                useNativeDriver: true
            }
        ).start();*/
        
    }

    
    return(
        

        <View style={styles.container}>
            <TouchableWithoutFeedback
                //activeOpacity={1} 
                onPress={() => {
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


            
            <TouchableWithoutFeedback onPress={() => toggleSubview()}>
                <Animated.View
                    style={[styles.subView, {transform: [{translateY: animatedValue}]}]}
                >
                
                    <SwipeableComponent/>
    
                </Animated.View>  
            </TouchableWithoutFeedback>            
          
            
        </View>

        
        
    )
};

export default Drill




const SwipeableComponent = () => {
    
    
    return(
        <View style={{
            padding: 8,
            flex: 1,
            backgroundColor: 'rgb(255,255,255)', 
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
        height: 376,
        //marginRight: 25,
        //marginLeft: 25,
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
});