import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StyleSheet, Text, View } from 'react-native';
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
import { Hub } from '@aws-amplify/core';
import useCurrentUser from './src/useCurrentUser';
import { Auth } from 'aws-amplify';
import Home from './src/Athletes/Home'
import { Container, Content, StyleProvider } from 'native-base';
import material from './native-base-theme/variables/material';
import getTheme from './native-base-theme/components';




const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'red' });
const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: 'red' });
const MyTheme = Object.assign({}, AmplifyTheme, { 
    sectionHeader: MySectionHeader,
    button: MyButton
});


Amplify.configure(amplify);




function App() {
    const currentUser = useCurrentUser();

    const fontsLoaded = true
    
    /*let [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    });*/
    
    const Tab = createBottomTabNavigator();
    const isLoggedIn = (null !== currentUser);


    
    
    if (!fontsLoaded) return <AppLoading />;
    return (
        <StyleProvider style={getTheme(material)}>
            <NavigationContainer>
                {isLoggedIn ?
                    <Home/>
                    :
                    <Authenticator hideDefault={true} theme={MyTheme}>
                        <AuthWithContext/>
                    </Authenticator>
                }
            </NavigationContainer>
        </StyleProvider>    
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
