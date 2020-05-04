import React, { useState, useContext } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, Authenticator } from 'aws-amplify-react-native';
import { TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions, Alert, Button, TextInput, View, StyleSheet, Text, Animated } from 'react-native';
import { Video } from 'expo-av';
const { width, height } = Dimensions.get("window");
import SignIn  from './SignIn'
import SignUp  from './SignUp'
import { AuthContext, IAuthContext } from './AuthContext'
/* declared as variable (not state), as it doesn't require a re render */
let subViewHidden = true

const initial_signup_state = {
    step: 1,
    name: '',
    email: '',
    password: '',
    show_name_validation: false,
    show_email_validation: false,
    show_password_validation: false,
}

const initial_signin_state = {
    email: '',
    password: '',
}

const AuthWithContext = () => {
    
    const [signup_state, setSignUpState] = useState<IAuthContext['signup_state']>(initial_signup_state)
    const [signin_state, setSignInState] = useState<IAuthContext['signin_state']>(initial_signin_state)

    const initialAuthContext = {
        signup_state: signup_state,
        setSignUpState: setSignUpState,
        signin_state: signin_state,
        setSignInState: setSignInState
    }
    
    return(
        <AuthContext.Provider value={initialAuthContext}>
            <Auth/>
        </AuthContext.Provider>
    )
}

export default AuthWithContext



const Auth = () => {

    const auth_context = useContext(AuthContext)

    
    /* initial value of the animated view is 400 (the height of the view), so it doesn't show */
    const [bounce_value, setBounceValue] = useState(new Animated.Value(400))
    
    const [auth_state, setAuthState] = useState<'' | 'signin' | 'signup'>('')

    const _onLogin = () => {
        //Alert.alert('Credentials', `${email} + ${password}`);
    }
    
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
            }
        ).start();
        
        subViewHidden = !subViewHidden;
    }
    
    return(
        <TouchableOpacity activeOpacity={1} onPress={() => {
            if(subViewHidden) return
            auth_context.setSignUpState(initial_signup_state)
            auth_context.setSignInState(initial_signin_state)
            toggleSubview()
        }}>
            <View style={styles.container}>
            
                <View style={styles.authButtons}>
                    <View style={styles.signUpButton}>
                        <Button
                            color="black"
                            title={'GET STARTED'}
                            onPress={() => {
                                setAuthState('signup')
                                toggleSubview()
                            }}
                        />
                    </View>
                    
                    <Text 
                        style={styles.signInButton}
                        onPress={() => {
                            setAuthState('signin')
                            toggleSubview()
                        }}
                    >
                        I already have an account
                    </Text>
                    
                </View>

                {/* https://docs.expo.io/versions/latest/sdk/video/ */}
                <Video
                    source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.video}
                />
                
                <TouchableWithoutFeedback>
                    <Animated.View
                        style={[styles.subView, {transform: [{translateY: bounce_value}]}]}
                    >
                        {auth_state === 'signin' &&
                            <SignIn />
                        }
                        {auth_state === 'signup' &&
                            <SignUp />
                        }

                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableOpacity>
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
        width: width-50,
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