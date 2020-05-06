import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import amplify from './aws-exports';
import { AmplifyTheme, SignIn, SignUp, Authenticator } from 'aws-amplify-react-native';
import MyCustomSignIn from './src/Authentication/SignIn'
import MyCustomSignUp from './src/Authentication/SignUp'
import AuthWithContext from './src/Authentication/Auth'
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
/* https://github.com/aws-amplify/amplify-js/blob/master/packages/aws-amplify-react-native/src/AmplifyTheme.js */

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'red' });
const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: 'red' });
const MyTheme = Object.assign({}, AmplifyTheme, { 
    sectionHeader: MySectionHeader,
    button: MyButton
});


Amplify.configure(amplify);




function App() {
    const fontsLoaded = true
    
    /*let [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    });*/
    
    
    
    

    
    
    if (!fontsLoaded) return <AppLoading />;
    return (
        <Authenticator hideDefault={true} theme={MyTheme}>
            <AuthWithContext/>
        </Authenticator>
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
