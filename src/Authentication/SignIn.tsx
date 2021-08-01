import React, { useState, useContext,useRef, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, SignUp, Authenticator } from 'aws-amplify-react-native';
import { Pressable, Alert, Button, TextInput, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Auth } from 'aws-amplify';
import { globalStyles } from '../GlobalStyles'
import CustomFont from '../GlobalComponents/CustomFont'
import { color } from 'react-native-reanimated';


interface Iuser {
    email: string
    password: string  
} 

const SignIn = () => {

    const [loading, setLoading]  = useState<boolean>(false)

    const emailRef = useRef<TextInput>(null) 

    /* TO HANDLE STYLES CONDITIONALY */
    const [inputFocus, setInputFocus] = useState({
        email: true,
        password: false
    })

    /* FOCUS EMAIL INPUT ON MOUNT */
    useEffect(() => {
        if(emailRef.current) emailRef.current.focus()
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


    
    const handleOnPress = async () => {

        setLoading(true)
        try {
            await Auth.signIn(user.email, user.password);
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
                    style={inputFocus.email ? [styles.unfocusedInput, {borderBottomColor: '#373636'}] : styles.unfocusedInput}
                    autoCapitalize='none'
                    onFocus={() => setInputFocus({email: true, password: false})}
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
                    secureTextEntry={true}
                    value={user.password}
                    onChangeText={(val) => setUser((prevState) => ({...prevState, password: val}))}
                    //placeholder={'eg. john@johnboyle.me'}
                    style={inputFocus.password ? [styles.unfocusedInput, {borderBottomColor: '#373636'}] : styles.unfocusedInput}
                    onFocus={() => setInputFocus({email: false, password: true})}
                />
                {validations.password &&
                    <Text style={[globalStyles.inputError, {marginTop: 14}]}>{validations.message}</Text>
                }                    
            </View>
            
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            

            <View style={{marginBottom: 84}}></View>


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
        backgroundColor: '#ecf0f1',
    },
    button: {
        backgroundColor: '#373636',
        width: '100%',
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unfocusedInput: {
        height: 46,
        //padding: 10,
        //marginBottom: 10,
        borderBottomColor: '#C8C7C7',
        borderBottomWidth: 1
    },
    forgottenPassword: {
        alignSelf: 'center',
        textDecorationLine: 'underline'
    }
});