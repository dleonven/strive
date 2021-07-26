import React, { useState, useContext } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, SignUp, Authenticator } from 'aws-amplify-react-native';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { AuthContext } from './AuthContext'
import { Auth } from 'aws-amplify';
import { globalStyles } from '../GlobalStyles'


interface Iuser {
    email: string
    password: string  
} 

const SignIn = () => {
    const { setLoading, signin_state, setSignInState } = useContext(AuthContext)

    const [user, setUser] = useState<Iuser>({
        email: '',
        password: '',
    })

    const [validations, setValidations] = useState({
        email: false, 
        password: false,
        message: ''
    })

    return(
        <View style={styles.container}>
            <View style={styles.upperContent}>
                <View style={styles.header}>
                    <Text>WELCOME BACK</Text>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput
                        value={user.email}
                        onChangeText={(val) => setUser((prevState) => ({...prevState, email: val}))}
                        placeholder={'eg. john@johnboyle.me'}
                        style={styles.input}
                    />
                    {validations.email &&
                        <Text style={globalStyles.inputError}>{validations.message}</Text>
                    }
                </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            value={user.password}
                            onChangeText={(val) => setUser((prevState) => ({...prevState, password: val}))}
                            placeholder={'eg. john@johnboyle.me'}
                            style={styles.input}
                        />
                        {validations.password &&
                            <Text style={globalStyles.inputError}>{validations.message}</Text>
                        }                    
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    color="white"
                    title={'SIGN IN'}
                    onPress={async () => {
                        try {
                            await Auth.signIn(user.email, user.password);
                        }
                        catch (error) {
                            console.log('error signing in', error);
                        }
                    }}
                />
            </View>
            <Text style={styles.forgottenPassword}>Forgotten password?</Text>
        </View>
    )
}





export default SignIn


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
    forgottenPassword: {
        alignSelf: 'center',
        textDecorationLine: 'underline'
    }
});