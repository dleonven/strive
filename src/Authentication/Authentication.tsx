import React, { useState, useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, Authenticator } from 'aws-amplify-react-native';
import { 
    Easing,
    StatusBar, 
    Platform, 
    SafeAreaView, 
    Pressable, 
    Keyboard, 
    KeyboardAvoidingView, 
    Image, 
    TouchableOpacity, 
    Modal, 
    TouchableWithoutFeedback, 
    Dimensions, 
    Alert, 
    Button, 
    TextInput, 
    View, 
    StyleSheet, 
    Text, 
    Animated 
} from 'react-native';
import { Video } from 'expo-av';
const { width, height } = Dimensions.get("window");
import SignIn  from './SignIn'
import SignUp  from './SignUp'
import Loading from '../Loading'
import { PanGestureHandler } from 'react-native-gesture-handler';
import { globalStyles } from '../GlobalStyles';

/* declared as variable (not state), as it doesn't require a re render */

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 80 : StatusBar.currentHeight;

type authState = '' | 'signIn' | 'signUp'

const Authentication = (props: {setIsLoggedIn: Function}) => {

    const [route, setRoute] = useState<authState>('')

    const prevRouteRef = useRef<authState>(route);
    const firstUpdate = useRef(true);

    const [isShown, setIsShown] = useState<boolean>(false)    
    const animatedController = useRef(new Animated.Value(0)).current;

    const translateY = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 450],
    });

    useEffect(() => {
        /* TO AVOID TO RUN AT FIRST RENDER (UPDATE) */
        if(firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if(prevRouteRef.current === '' && route === 'signIn') toggleListItem()
        else if(prevRouteRef.current === 'signIn' && route === '') toggleListItem()
        /* ADD HERE LOGIC LATER WHEN WE ADD SIGN UP */

        prevRouteRef.current = route

    }, [route])

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




    const [loading, setLoading] = useState(false)

    


    
    if(loading) return <Loading />
    
    return(
        <View style={styles.container}>

            {/* BACKGROUND VIDEO */}
            {/* https://docs.expo.io/versions/latest/sdk/video/ */}
            <Video
                source={{ uri: 'http://johnboyle.me/wp-content/uploads/2021/08/8fbd8031-e692-4896-894c-bbc6bc658097.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.video}
            />



            {/* CONTENT */}
            <Pressable 
                style={styles.content}
                onPress={() => {
                    Keyboard.dismiss()
                    setRoute('')
                }}
            >

                <Image
                    style={{width: 200, height: 200}}
                    source={require('../../assets/round-logo.png')} 
                />


                {/* LOGIN BUTTON */}
                {route === '' &&
                    <Pressable
                        onPress={() => {setRoute('signIn')}}
                        style={styles.loginButton}
                    >
                        <Text style={globalStyles.copyText}>LOG IN</Text>
                    </Pressable>                
                }


            </Pressable>

            {/* KeyboardAvoidingView SO THE FORM ADJUSTS TO THE KEYBOARD*/}
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-24}>
                {/* LOGIN ANIMATION */}
                <Animated.View style={[styles.authContainer, {height: translateY}]}> 
                    {route === 'signIn' && <SignIn setIsLoggedIn={props.setIsLoggedIn}/>}

                </Animated.View>
            </KeyboardAvoidingView>

        </View>





    )
}

export default Authentication



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: 24,
        paddingRight: 24,
    },
    authButtons: {
        zIndex: 2,
        position: 'absolute',
        alignSelf: 'center',
    },
    loginButton: {
        backgroundColor: '#FFFFFF' , 
        width: '100%', 
        height: 56, 
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 48
    },
    authContainer: {
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    bodyContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    video: {
        position: 'absolute',
        height: height,
        width: width,
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
