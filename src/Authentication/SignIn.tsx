import React, { useState, useContext,useRef, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, SignUp, Authenticator } from 'aws-amplify-react-native';
import { Pressable, Alert, Button, TextInput, View, StyleSheet, Text, ActivityIndicator, Keyboard } from 'react-native';
import { Auth } from 'aws-amplify';
import { globalStyles } from '../GlobalStyles'
import CustomFont from '../GlobalComponents/CustomFont'
import { color } from 'react-native-reanimated';


interface Iuser {
    email: string
    password: string  
} 

const SignIn = (props: {setIsLoggedIn: Function}) => {

    const [loading, setLoading]  = useState<boolean>(false)

    const emailRef = useRef<TextInput>(null) 
    const passwordRef = useRef<TextInput>(null) 



    /* TO HANDLE STYLES CONDITIONALY */
    const [inputFocus, setInputFocus] = useState({
        email: true,
        password: false
    })

    /* FOCUS EMAIL INPUT ON MOUNT */
    useEffect(() => {
        if(emailRef.current) emailRef.current.focus()

        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };

    }, [])

    const [user, setUser] = useState<Iuser>({
        email: '',
        password: '',
    })

    const [validations, setValidations] = useState({
        email: false, 
        password: false,
        message: ''
    })

    const [keyboardShown, setKeyboardShown] = useState(true);
    const _keyboardDidShow = () => setKeyboardShown(true);
    const _keyboardDidHide = () => setKeyboardShown(false);


    const handleOnPress = async () => {

        setLoading(true)
        try {
            await Auth.signIn(user.email, user.password);
            props.setIsLoggedIn(true)
        }
        catch (error) {
            console.log('error signing in', error);
            if(error.message.includes("Username cannot be empty")) setValidations({email: true, password: false, message: error.message})
            else if(error.message.includes("Invalid email address format")) setValidations({email: true, password: false, message: error.message})
            else if(error.message.includes("User does not exist.")) setValidations({email: true, password: false, message: error.message})
            else if(error.message.includes("Incorrect username or password.")) setValidations({email: false, password: true, message: error.message})
            else if(error.message.includes("Custom auth lambda trigger is not configured for the user pool.")) setValidations({email: false, password: true, message: "Password cannot be empty."})
            else if(error.message.includes("Password attempts exceeded. Please try again later.")) setValidations({email: false, password: true, message: "Password cannot be empty."})
        }
        setLoading(false)
    }

    /* https://stackoverflow.com/questions/53138637/how-to-use-multiple-independent-conditional-styles-on-same-div-in-reactjs */
    const setEmailInputStyle = () => {
        let inputStyles = {
            height: 46,
            borderBottomWidth: 2         
        }
        if(validations.email) {
            const inputErrorStyle = {
                borderBottomColor: '#DE0404'
            }
            inputStyles = Object.assign(inputStyles, inputErrorStyle)        
        }
        else if(inputFocus.email) {
            const inputErrorStyle = {
                borderBottomColor: '#373636'
            }    
            inputStyles = Object.assign(inputStyles, inputErrorStyle)        
        }
        else {
            const inputErrorStyle = {
                borderBottomColor: '#C8C7C7'
            }    
            inputStyles = Object.assign(inputStyles, inputErrorStyle)           }

        return inputStyles
    } 
    

    const setPasswordInputStyle = () => {
        let inputStyles = {
            height: 46,
            borderBottomWidth: 2           
        }
        if(validations.password) {
            const inputErrorStyle = {
                borderBottomColor: '#DE0404'
            }
            inputStyles = Object.assign(inputStyles, inputErrorStyle)        
        }
        else if(inputFocus.password) {
            const inputErrorStyle = {
                borderBottomColor: '#373636'
            }    
            inputStyles = Object.assign(inputStyles, inputErrorStyle)        
        }
        else {
            const inputErrorStyle = {
                borderBottomColor: '#C8C7C7'
            }    
            inputStyles = Object.assign(inputStyles, inputErrorStyle)           }

        return inputStyles
    } 



    return(
        <View style={styles.container}>
            <Text style={globalStyles.bigTitle}>WELCOME BACK</Text>
            
            <View style={{marginBottom: 24}}></View>
            
            {/* EMAIL */}
            <View>
                <Text style={inputFocus.email ? [globalStyles.copyText, {fontWeight: '600'}] : globalStyles.copyText}>Email</Text>
                <TextInput
                    ref={emailRef}
                    value={user.email}
                    onChangeText={(val) => setUser((prevState) => ({...prevState, email: val}))}
                    placeholder={'eg. john@johnboyle.me'}
                    style={setEmailInputStyle()}
                    autoCapitalize='none'
                    onFocus={() => setInputFocus({email: true, password: false})}
                    onSubmitEditing={() => {
                        if(passwordRef.current) passwordRef.current.focus()
                    }}
                />
                {validations.email &&
                    <Text style={[globalStyles.inputError, {marginTop: 14}]}>{validations.message}</Text>
                }
            </View>


            <View style={{marginTop: 24}}></View>

            {/* PASSWORD */}
            <View>
                <Text style={inputFocus.password ? [globalStyles.copyText, {fontWeight: '600'}] : globalStyles.copyText}>Password</Text>
                <TextInput
                    ref={passwordRef}
                    secureTextEntry={true}
                    value={user.password}
                    onChangeText={(val) => setUser((prevState) => ({...prevState, password: val}))}
                    //placeholder={'eg. john@johnboyle.me'}
                    style={setPasswordInputStyle()}
                    onFocus={() => setInputFocus({email: false, password: true})}
                />
                {validations.password &&
                    <Text style={[globalStyles.inputError, {marginTop: 14}]}>{validations.message}</Text>
                }                    
            </View>
            
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            
            {/* IF KEYBOARD IS SHOWN, REDUCE THE MARGIN */}
            {keyboardShown ? <View style={{marginBottom: 36}}></View> : <View style={{marginBottom: 62}}></View>}
            


            <Pressable
                style={styles.button} 
                onPress={handleOnPress}
            >
                <Text style={[globalStyles.copyText, {color: '#FFFFFF'}]}>LOG IN</Text>
            </Pressable>


            {/*<Text style={styles.forgottenPassword}>Forgo}tten password?</Text>*/}
        </View>
    )
}





export default SignIn


const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 32,
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#373636',
        width: '100%',
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgottenPassword: {
        alignSelf: 'center',
        textDecorationLine: 'underline'
    }
});