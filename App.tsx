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
import MyCoach from './src/Athletes/MyCoach/MyCoach'
import Discover from './src/Athletes/Discover'
import { Container, Content, StyleProvider } from 'native-base';
import material from './native-base-theme/variables/material';
import getTheme from './native-base-theme/components';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 


const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'red' });
const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: 'red' });
const MyTheme = Object.assign({}, AmplifyTheme, { 
    sectionHeader: MySectionHeader,
    button: MyButton
});


Amplify.configure(amplify);


const Stack = createStackNavigator();


function App() {
    const currentUser = useCurrentUser();

    //const fontsLoaded = true
    
    let [fontsLoaded] = useFonts({
        'BioSans-Bold': require('./assets/fonts/BioSans-Bold.otf'),
        'BioSans-BoldItalic': require('./assets/fonts/BioSans-BoldItalic.otf'),
        'BioSans-ExtraBold': require('./assets/fonts/BioSans-ExtraBold.otf'),
        'BioSans-ExtraBoldItalic': require('./assets/fonts/BioSans-ExtraBoldItalic.otf'),
        'BioSans-ExtraLight': require('./assets/fonts/BioSans-ExtraLight.otf'),
        'BioSans-ExtraLightItalic': require('./assets/fonts/BioSans-ExtraLightItalic.otf'),
        'BioSans-Italic': require('./assets/fonts/BioSans-Italic.otf'),
        'BioSans-Light': require('./assets/fonts/BioSans-Light.otf'),
        'BioSans-LightItalic': require('./assets/fonts/BioSans-LightItalic.otf'),
        'BioSans-Regular': require('./assets/fonts/BioSans-Regular.otf'),
        'BioSans-SemiBold': require('./assets/fonts/BioSans-SemiBold.otf'),
        'BioSans-SemiBoldItalic': require('./assets/fonts/BioSans-SemiBoldItalic.otf'),
    });
    
    const Tab = createBottomTabNavigator();
    const isLoggedIn = (null !== currentUser);


    
    
    if (!fontsLoaded) return <AppLoading />;
    return (
        <NavigationContainer>
            {isLoggedIn ?
                <Stack.Navigator>


                    <Stack.Screen 
                        name="MyCoach" 
                        component={MyCoach} 
                        options={{
                            title: 'My Coach',
                            headerStyle: {
                                height: 125,
                                shadowColor: 'transparent'
                            },
                            headerTintColor: 'rgb(55,54,54)',
                            headerTitleStyle: {
                                fontFamily: 'BioSans-Bold',
                                fontSize: 14
                            },
                            headerLeft: () => (
                                <MaterialIcons 
                                    name="keyboard-arrow-left" 
                                    size={24} 
                                    color="rgb(55,54,54)"
                                    onPress={() => alert('This is a button!')}
                                />                                
                            ),                                
                        }}    
                    /> 






                    <Stack.Screen 
                        name="Discover" 
                        component={Discover} 
                        options={{
                            title: 'Discover',
                            headerStyle: {
                                height: 125
                            },
                            headerTintColor: 'rgb(55,54,54)',
                            headerTitleStyle: {
                                fontFamily: 'BioSans-Bold',
                                fontSize: 14
                            },
                            headerLeft: () => (
                                <MaterialIcons 
                                    name="keyboard-arrow-left" 
                                    size={24} 
                                    color="rgb(55,54,54)"
                                    onPress={() => alert('This is a button!')}
                                />                                
                            ),                                
                        }}    
                    />                        
                    
                    <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={{
                            title: 'My home',
                            headerStyle: {
                                height: 125
                            },
                            headerTintColor: 'rgb(55,54,54)',
                            headerTitleStyle: {
                                fontFamily: 'BioSans-Bold',
                                fontSize: 14
                            },
                            headerLeft: () => (
                                <MaterialIcons 
                                    name="keyboard-arrow-left" 
                                    size={24} 
                                    color="rgb(55,54,54)"
                                    onPress={() => alert('This is a button!')}
                                />                                
                            ),                                
                        }}    
                    />
                    
                </Stack.Navigator>
                :
                <Authenticator hideDefault={true} theme={MyTheme}>
                    <AuthWithContext/>
                </Authenticator>
            }
        </NavigationContainer>
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