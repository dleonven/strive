import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
/* https://duncanleung.com/aws-amplify-aws-exports-js-typescript/ */
import amplify from './aws-exports';
import { AmplifyTheme, SignIn, SignUp, Authenticator } from 'aws-amplify-react-native';
import MyCustomSignIn from './src/Authentication/SignIn'
import MyCustomSignUp from './src/Authentication/SignUp'
import AuthWithContext from './src/Authentication/Auth'
import AppLoading from 'expo-app-loading'
import { useFonts } from '@use-expo/font';
/* https://github.com/aws-amplify/amplify-js/blob/master/packages/aws-amplify-react-native/src/AmplifyTheme.js */
import { Hub } from '@aws-amplify/core';
import useCurrentUser from './src/useCurrentUser';
import { Auth } from 'aws-amplify';
import Home from './src/Athletes/Home'
import MyCoach from './src/Athletes/MyCoach/MyCoach'
import Drill from './src/Athletes/MyCoach/Drill'
import Workout from './src/Athletes/MyCoach/Workout'

import Series from './src/Athletes/MyCoach/Series'
import MyAccount from './src/Athletes/MyAccount'

import Discover from './src/Athletes/Discover'
import { Container, Content, StyleProvider } from 'native-base';
import material from './native-base-theme/variables/material';
import getTheme from './native-base-theme/components';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'red' });
const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: 'red' });

const MyTheme = Object.assign({}, AmplifyTheme, { 
    sectionHeader: MySectionHeader,
    button: MyButton,
    
    /* https://stackoverflow.com/questions/48253357/react-navigation-default-background-color */    
    colors: {
        //...DefaultTheme.colors,
        background: 'white'
    },
});


Amplify.configure(amplify);

const Tab = createBottomTabNavigator();

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
    
    const isLoggedIn = (null !== currentUser);



    
    if (!fontsLoaded) return <AppLoading />;
    return (
        <NavigationContainer theme={MyTheme}>

            {isLoggedIn ?
            
                <StackNavigator/>
                :
                <Authenticator hideDefault={true} theme={MyTheme}>
                    <AuthWithContext/>
                </Authenticator>

            }
        </NavigationContainer>
    );
}

export default App;



const BottomTabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: { height: 83 }
            }}
        >
        
        
            {/* FIRST BOTTOM TAB */}
            <Tab.Screen 
                name="MyCoach" 
                component={MyCoach} 
                options={{
                    title: 'MY COACH',
                    style: {
                        backgroundColor: 'white'
                    },
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
                        <Image
                            source={require('./assets/round-logo.png')} 
                            style={{ width: 32, height: 32, marginLeft: 24 }}
                        />
                    ),
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({focused}: any) => {
                        if(focused) return(
                            <Image 
                                source={require('./assets/coach-selected.png')} 
                                style={{ width: 32, height: 32 }}
                            />
                        )
                        else return(
                            <Image 
                                source={require('./assets/coach-unselected.png')} 
                                style={{ width: 32, height: 32 }}
                            />                               
                        )
                    }                    
                }}
            />         





            {/* MIDDLE LOGO */}
            <Tab.Screen 
                name="Strive" 
                component={StackNavigator} 
                listeners={{
                    tabPress: (e: any) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}  
                
                options={{
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ focused }: any) => {
                        return(
                            <Image 
                                source={require('./assets/round-logo.png')} 
                                style={{ width: 68, height: 68, marginBottom: 34 }}
                            />
                        )
                    }
                }}                           
                
            />                    
            
            <Tab.Screen 
                name="MyAccount" 
                component={MyAccount} 
                
                options={{
                    Title: 'MY ACCOUNT',
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({focused}: any) => {
                        if(focused) return(
                            <Image 
                                source={require('./assets/account-selected.png')} 
                                style={{ width: 32, height: 32 }}
                            />
                        )
                        else return(
                            <Image 
                                source={require('./assets/account-unselected.png')} 
                                style={{ width: 32, height: 32 }}
                            />                               
                        )
                    }
                }}                         
                
                
            />                    
            
        </Tab.Navigator>          
        
    )
}

const StackNavigator = () => {
    return(
        <Stack.Navigator>

    
            <Stack.Screen 
                name="MyCoach" 
                component={BottomTabs} 
                options={{
                    title: 'MY COACH',
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
                        <TouchableHighlight onPress={async () => await Auth.signOut()}>
                            <Image 
                                source={require('./assets/round-logo.png')} 
                                style={{ width: 32, height: 32, marginLeft: 24 }}
                            />
                        </TouchableHighlight>   
                    ),                                
                }}
            /> 


            <Stack.Screen 
                name="Workout" 
                component={Workout}
                options={() => topHeaderBackWhite('WORKOUT')}                
            />        
    
    
            <Stack.Screen 
                name="Drill" 
                component={Drill} 
                options={() => topHeaderVideo()}
            />     
    
            <Stack.Screen 
                name="Series" 
                component={Series} 
                options={{
                    title: 'SERIES',
                    headerStyle: {
                        height: 84,

                        /* TO REMOVE BORDER BELLOW THE HEADER */
                        shadowColor: 'transparent'
                    },
                    /* TITLE COLOR */
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontFamily: 'BioSans-Bold',
                        fontSize: 15,
                        letterSpacing: 2.25
                    },

                    headerBackImage: () => (
                        <Image 
                            source={require('./assets/transparent-back.png')} 
                            style={{ width: 13, height: 21, marginLeft: 24 }}
                        />
                    ), 
                    headerBackTitleVisible: false,
                    headerShown: true,
                    headerTransparent: true
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
    
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const topHeaderBackWhite = (title: string) => {
    
    return {
        title: title,
        headerStyle: {
            height: 84,
            backgroundColor: 'rgb(255,255,255)',
            
            /* TO REMOVE BORDER BELLOW THE HEADER */
            shadowColor: 'transparent'
        },
        headerTintColor: 'rgb(55,54,54)',
        headerTitleStyle: {
            fontFamily: 'BioSans-Bold',
            fontSize: 15,
            letterSpacing: 2.25
        },
        headerBackImage: () => (
            <Image 
                source={require('./assets/back.png')} 
                style={{ width: 13, height: 21, marginLeft: 24 }}
            />
        ), 
        headerBackTitleVisible: false,
        headerShown: true,
        cardStyle: { backgroundColor: 'white' }
    }
}


const topHeaderVideo = () => {
    
    return {
        title: '',
        headerStyle: {
            height: 125,
            shadowColor: 'transparent'
        },
        headerTintColor: 'rgb(55,54,54)',
        headerTitleStyle: {
            fontFamily: 'BioSans-Bold',
            fontSize: 14
        },
        headerBackImage: () => (
            <Image 
                source={require('./assets/video-back.png')} 
                style={{ width: 32, height: 32, marginLeft: 24 }}
            />

        ), 
        headerBackTitleVisible: false,
        
        headerRight: () => (
            <Image 
                source={require('./assets/video-full-screen.png')} 
                style={{ width: 32, height: 32, marginRight: 24 }}
            />
        ),                      
        headerShown: true,
        headerTransparent: true,
    }
}