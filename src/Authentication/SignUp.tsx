import React, { useState, useContext } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, Authenticator } from 'aws-amplify-react-native';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { AuthContext } from './AuthContext'
import { Auth } from 'aws-amplify';
import { globalStyles } from '../GlobalStyles'
import Loading from '../Loading'

interface IsignUpData {
    name: string,
    email: string,
    password: string
}




const SignUp = () => {
    
    return <Loading />

    const auth_context = useContext(AuthContext)
    
    
    if(auth_context.signup_state.step === 1) return <Step1/>
    else if(auth_context.signup_state.step === 2) return <Step2/>
    else if(auth_context.signup_state.step === 3) return <Step3/>
    return null
}

export default SignUp


const Step1 = () => {
    const { signup_state, setSignUpState } = useContext(AuthContext)
    
    return(
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.header}>
                    <Text style={styles.joinUs}>JOIN US</Text>
                    <View style={styles.stepBox}>
                        <Text>Step 1 of 5</Text>
                    </View>
                </View>
                <View>
                    <Text>What should we call you?</Text>
                    <TextInput
                        value={signup_state.name}
                        onChangeText={(val) => setSignUpState((prevState: {}) => ({...prevState, name: val}))}
                        placeholder={'eg. John'}
                        style={styles.input}
                    />
                    {signup_state.show_name_validation &&
                        <Text style={globalStyles.inputError}>Enter name</Text>
                    }
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    color="white"
                    title={'CONTINUE'}
                    onPress={() => {
                        if(signup_state.name.length === 0) setSignUpState((prevState: {}) => ({...prevState, show_name_validation: true}))
                        else setSignUpState((prevState: {}) => ({...prevState, step: 2}))
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    upperContent: {
        flex: 1, 
        width: '100%',
        alignSelf: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        /* https://stackoverflow.com/questions/54687968/how-to-set-alignself-for-flexdirection-row */
        justifyContent: 'space-between',
        marginBottom: 32
    },
    joinUs: {
        //fontFamily: 'BioSans-Bold',
        fontSize: 26
    },
    stepBox: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 33,
        backgroundColor: 'rgb(236,235,235)',
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        height: 40,
        borderRadius: 5,
        marginBottom: 32
    },
    input: {
        height: 44,
        padding: 10,
        marginBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
});





const Step2 = () => {
    const { signup_state, setSignUpState } = useContext(AuthContext)


    const signUp = async () => {
        try {
            const user = await Auth.signUp({
                username: signup_state.email,
                password: signup_state.password,
                attributes: {
                    email: signup_state.email,
                    nickname: signup_state.name
                }
            });
            console.log({ user });
            setSignUpState((prevState: {}) => ({...prevState, step: 3}))
            
            
        } 
        catch (error) {
            console.log('error signing up:', error.message);
            
            /* this first one should be catched by step1 */
            if(error.message.includes("Username cannot be empty")) {
                setSignUpState((prevState: {}) => ({...prevState, show_password_validation: false, show_email_validation: true}))
            } 
            else if(error.message.includes("Invalid email address format")) {
                setSignUpState((prevState: {}) => ({...prevState, show_password_validation: false, show_email_validation: true}))
            } 
            else if(error.message.includes("Password cannot be empty")) {
                setSignUpState((prevState: {}) => ({...prevState, show_email_validation: false, show_password_validation: true}))
            } 
            else if(error.message.includes("'password' failed to satisfy constraint")) {
                setSignUpState((prevState: {}) => ({...prevState, show_email_validation: false, show_password_validation: true}))
            } 
            else if(error.message.includes("Password not long enough")) {
                setSignUpState((prevState: {}) => ({...prevState, show_email_validation: false, show_password_validation: true}))
            } 
            
            
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.header}>
                    <Text>JOIN US</Text>
                    <View style={styles.stepBox}>
                        <Text>Step 2 of 5</Text>
                    </View>
                </View>
                <View>
                    <Text>Enter your email</Text>
                    <TextInput
                        value={signup_state.email}
                        onChangeText={(val) => setSignUpState((prevState: {}) => ({...prevState, email: val}))}
                        placeholder={'eg. john@johnboyle.me'}
                        style={styles.input}
                    />
                    {signup_state.show_email_validation &&
                        <Text style={globalStyles.inputError}>Enter a valir email</Text>
                    }
                </View>
                    <View>
                        <Text>Choose a password</Text>
                        <TextInput
                            value={signup_state.password}
                            onChangeText={(val) => setSignUpState((prevState: {}) => ({...prevState, password: val}))}
                            placeholder={'eg. john@johnboyle.me'}
                            style={styles.input}
                        />
                        {signup_state.show_password_validation &&
                            <Text style={globalStyles.inputError}>Password should contain XX</Text>
                        }
                    </View>
            </View>
            <View style={styles.button}>
                <Button
                    color="white"
                    title={'CONTINUE'}
                    onPress={() => signUp()}
                />
            </View>
        </View>
    )
}


const Step3 = () => {
    const { signup_state, setSignUpState } = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.header}>
                    <Text>JOIN US</Text>
                    <View style={styles.stepBox}>
                        <Text>Step 3 of 5</Text>
                    </View>
                </View>
                <View>
                    <Text>Enter your email</Text>
                    <TextInput
                        value={signup_state.email}
                        onChangeText={(val) => setSignUpState((prevState: {}) => ({...prevState, email: val}))}
                        placeholder={'eg. john@johnboyle.me'}
                        style={styles.input}
                    />
                </View>
                    <View>
                        <Text>Choose a password</Text>
                        <TextInput
                            value={signup_state.password}
                            onChangeText={(val) => setSignUpState((prevState: {}) => ({...prevState, password: val}))}
                            placeholder={'eg. john@johnboyle.me'}
                            style={styles.input}
                        />
                    </View>
            </View>
            <View style={styles.button}>
                <Button
                    color="white"
                    title={'CONTINUE'}
                    onPress={() => null}
                />
            </View>
        </View>
    )
}

