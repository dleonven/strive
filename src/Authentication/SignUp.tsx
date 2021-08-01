import React, { useState, useContext } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, Authenticator } from 'aws-amplify-react-native';
import { Alert, Button, TextInput, View, StyleSheet, Text, Keyboard } from 'react-native';
import { Auth } from 'aws-amplify';
import { globalStyles } from '../GlobalStyles'
import Loading from '../Loading'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { ValidationContext } from 'graphql';


interface Iuser {
    name:       string
    email:      string
    password:   string    
}


const SignUp = (props: {setRoute: React.Dispatch<React.SetStateAction<"" | "signIn" | "signUp">>}) => {
        
    const [user, setUser] = useState<Iuser>({
        name: '',
        email: '',
        password: '',
    })
    
    const [activeStep, setActiveStep] = useState<1|2|3>(1)

    if(activeStep === 1) return <Step1 user={user} setUser={setUser} setActiveStep={setActiveStep}/>
    else if(activeStep === 2) return <Step2 user={user} setUser={setUser} setActiveStep={setActiveStep}/>
    else if(activeStep === 3) return <Step3 user={user} setUser={setUser} setActiveStep={setActiveStep} setRoute={props.setRoute}/>
    return null
}

export default SignUp


interface IstepProps {
    user:           Iuser
    setUser:        React.Dispatch<React.SetStateAction<Iuser>>
    setActiveStep:  React.Dispatch<React.SetStateAction<2 | 1 | 3>>
    setRoute?:      React.Dispatch<React.SetStateAction<"" | "signIn" | "signUp">>
}

const Step1 = (props: IstepProps) => {
    
    const [showNameValidation, setShowNameValidation] = useState<boolean>(false)

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
                        value={props.user.name}
                        onChangeText={(val) => props.setUser((prevState) => ({...prevState, name: val}))}
                        placeholder={'eg. John'}
                        style={styles.input}
                    />
                    {showNameValidation &&
                        <Text style={globalStyles.inputError}>Enter name</Text>
                    }
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    color="white"
                    title={'CONTINUE'}
                    onPress={() => {
                        if(props.user.name.length === 0) setShowNameValidation(true)
                        else props.setActiveStep(2)
                    }}
                />
            </View>
        </View>
    )
}


const Step2 = (props: IstepProps) => {

    const [showValidations, setShowValidations] = useState({
        email: false,
        password: false
    })
    

    const signUp = async () => {
        
        //setLoading(true)
        try {
            const user = await Auth.signUp({
                username: props.user.email,
                password: props.user.password,
                attributes: {
                    email: props.user.email,
                    nickname: props.user.name
                }
            });
            console.log({ user });
            props.setActiveStep(3)
        } 
        catch(error) {
            console.log('error signing up:', error.message);
            if(error.message.includes("Username cannot be empty")) setShowValidations({email: true, password: false})
            else if(error.message.includes("Invalid email address format")) setShowValidations({email: true, password: false})
            else if(error.message.includes("Password cannot be empty")) setShowValidations({email: false, password: true})
            else if(error.message.includes("'password' failed to satisfy constraint")) setShowValidations({email: false, password: true})
            else if(error.message.includes("Password not long enough")) setShowValidations({email: false, password: true})
            else if(error.message.includes("An account with the given email already exists")) setShowValidations({email: true, password: false})
        }
        //setLoading(false)
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
                        value={props.user.email}
                        onChangeText={(val) => props.setUser((prevState) => ({...prevState, email: val}))}
                        placeholder={'eg. john@johnboyle.me'}
                        style={styles.input}
                        autoCapitalize='none'
                    />
                    {showValidations.email &&
                        <Text style={globalStyles.inputError}>Enter a valid email</Text>
                    }
                </View>
                    <View>
                        <Text>Choose a password</Text>
                        <TextInput
                            secureTextEntry={true}
                            value={props.user.password}
                            onChangeText={(val) => props.setUser((prevState) => ({...prevState, password: val}))}
                            placeholder={'eg. john@johnboyle.me'}
                            style={styles.input}
                        />
                        {showValidations.password &&
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


const Step3 = (props: IstepProps) => {

    const [confirmationCode, setConfirmationCode] = useState<string>('')

    const [validation, setValidation] = useState({
        show: false,
        message: ''
    })

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
                    <Text>Enter the code</Text>
                    <CodeField
                        //accessibilityValue
                        value={confirmationCode}
                        onChangeText={(val) => setConfirmationCode(val)}
                        cellCount={6}
                        rootStyle={styles.codeFiledRoot}
                        keyboardType="number-pad"
                        renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                            >
                            {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />

                    {validation.show &&
                        <Text style={globalStyles.inputError}>{validation.message}</Text>
                    }



                </View>
            </View>
            <View style={styles.button}>
                <Button
                    color="white"
                    title={'CONTINUE'}
                    onPress={async () => {
                        try {
                            await Auth.confirmSignUp(props.user.email, confirmationCode);
                            if(!!props.setRoute) props.setRoute('signIn')
                        } 
                        catch(error) {
                            setValidation({
                                show: true,
                                message: error.message
                            })
                        }
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
    
    
    
    
    root: {
        flex: 1, 
        padding: 20
    },
    title: {
        textAlign: 'center', fontSize: 30
    },
    codeFiledRoot: {
        marginTop: 20
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    
    
});