import React, { useState } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import { AmplifyTheme, SignUp, Authenticator } from 'aws-amplify-react-native';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';


const SignIn = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    const _onLogin = () => {

        Alert.alert('Credentials', `${email} + ${password}`);
    }
    
    return(
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={(val) => setEmail(val)}
                placeholder={'Email'}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(val) => setPassword(val)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            
            <Button
                title={'Login'}
                //style={styles.input}
                onPress={() => _onLogin()}
            />
        </View>
    )
}

export default SignIn


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});