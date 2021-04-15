import React, { useState, useEffect,  useRef } from 'react';
import { StatusBar, ScrollView, FlatList, ImageBackground } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Keyboard, KeyboardAvoidingView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions, Alert, Button, TextInput, View, StyleSheet, Text, Animated } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import CustomFont from '../../GlobalComponents/CustomFont'
import PersonCard from '../../GlobalComponents/PersonCard'

import { Fontisto, Feather } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get("window");

const Series = () => {
    


    return(
        

        <View style={styles.container}>
            <StatusBar translucent={true} />

        
            <FlatList 
                contentContainerStyle={styles.grid}
                columnWrapperStyle={{marginLeft: 24}}
                ListHeaderComponent={
                
                    <View>
                
                
                        <ImageBackground 
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
                            style={styles.image}
                        >
                            
                            {/* DARK BACKGROUND */}
                            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}></View>
                        
                            <View style={{
                                position: 'absolute', 
                                top: 0, 
                                left: 0, 
                                right: 0, 
                                bottom: 0, 
                                justifyContent: 'center', 
                                marginLeft: 24,
                                marginRight: 24,
                            }}>
                            
                                <CustomFont
                                    font_type="BigTitle"
                                    text="30 Day Range Challenge"
                                    color="white"
                                />                    
                                
                                
                                <PersonCard 
                                    name='Mike Dunn' 
                                    backgroundColor='transparent'
                                    textColor="white"
                                />                      
                                
                                
                                <View style={{ 
                                    height: 44,
                                    width: '100%',
                                    flexDirection: 'row', 
                                    alignItems: 'center',
                                    marginTop: 25,
                                    marginBottom: 24,
                                    justifyContent: 'center',
                                    borderRadius: 7,
                                    backgroundColor: 'rgba(52, 52, 52, 0.25)'
                                }}>
            
            
                                    <CustomFont 
                                        font_type={'ContentTitle'} 
                                        text={'30 Workouts'} 
                                        color="white"
                                    />
                                    
                                    <View style={{ 
                                        marginLeft: 32,
                                        marginRight: 32
                                    }}>
                                        <CustomFont 
                                            font_type={'ContentTitle'} 
                                            text={' | '} 
                                            color="white"
                                        />                        
                                    </View>
            
            
                                    <CustomFont 
                                        font_type={'ContentTitle'} 
                                        text={'Level: '} 
                                        color="white"
                                    />
                                    
                                    <Fontisto
                                        name="ellipse" 
                                        size={9} 
                                        color="white"
                                        style={{
                                            marginRight: 8
                                        }}
                                    />
                                    
                                    <Fontisto 
                                        name="ellipse" 
                                        size={9} 
                                        color="white"
                                        style={{ marginRight: 8 }}
                                    /> 
                                    
                                    <Fontisto 
                                        name="ellipse" 
                                        size={9} 
                                        color="transparent"
                                        style={{
                                            borderWidth: 1,
                                            borderColor: 'white',
                                            borderRadius: 7
                                        }}                            
                                    />
                                    
                                </View>
                                
                                
                                
                                <CustomFont
                                    font_type="CopyText"
                                    text="Spend the next 30 days making the gains you need in your shooting. We’ll cover everything you need to increase your range, accuracy and consistency."
                                    color="white"
                                />                  
                                 
                            </View>
                        </ImageBackground>                    
                
                
                        <View style={{ marginLeft: 24, marginTop: 32, marginBottom: 24 }}>
                            <CustomFont
                                font_type="Subtitle"
                                text="Workouts"
                            />                             
                        </View>

                
                    </View>
                }
                data={input}
                numColumns={2}
                renderItem={({ item }) => {
                    return(
                    
                        <View style={styles.gridItem}>
                            <Image
                                style={{ width: 156, height: 184, borderRadius: 4, marginRight: 16, marginBottom: 12 }}
                                source={{
                                    uri: item.uri,
                                }}
                            />          
                            
                            <Text style={{ fontSize: 16, fontFamily: 'BioSans-SemiBold', marginBottom: 5 }}>
                                {item.title}
                            </Text>                          
                            
                            <CustomFont
                                font_type="CopySmall"
                                text={item.text}
                            />                               
                        </View>            
                    
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />     
                
                
             

            

        </View>
        
    )
};

export default Series






const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        marginTop: 32,
        marginLeft: 24
    },
    image: {
        flex: 1,
        height: 423,
        //height: height,
                //alignSelf: 'center',
        //position: 'absolute',
        //width: width,
        
        zIndex: 1
    },
    grid: {
        //marginTop: 24,
    },
    gridItem: {
        marginBottom: 32,
        flex: 1,
    },  
    overlay: {
        opacity: 0.5,
        backgroundColor: '#000000'
    },
    
});



const input = [
    {
        title: "Dribbling",
        text: "Drills to sharpen your s..",
        minutes: 5,
        level: 3,
        workouts: 2,
        title_text: "StaticText",
        content_text: "StaticText",
        sport: "StaticText",
        coaches: 3,
        uri: "https://picsum.photos/200/300?random=1"
    },
    {
        title: "Dribbling",
        text: "Drills to sharpen your s..",
        minutes: 5,
        level: 3,
        workouts: 2,
        title_text: "StaticText",
        content_text: "StaticText",
        sport: "StaticText",
        coaches: 3,
        uri: "https://picsum.photos/200/300?random=1"
    },
    {
        title: "Dribbling",
        text: "Drills to sharpen your s..",
        minutes: 5,
        level: 3,
        workouts: 2,
        title_text: "StaticText",
        content_text: "StaticText",
        sport: "StaticText",
        coaches: 3,
        uri: "https://picsum.photos/200/300?random=1"
    },
    {
        title: "Dribbling",
        text: "Drills to sharpen your s..",
        minutes: 5,
        level: 3,
        workouts: 2,
        title_text: "StaticText",
        content_text: "StaticText",
        sport: "StaticText",
        coaches: 3,
        uri: "https://picsum.photos/200/300?random=1"
    },
    {
        title: "Dribbling",
        text: "Drills to sharpen your s..",
        minutes: 5,
        level: 3,
        workouts: 2,
        title_text: "StaticText",
        content_text: "StaticText",
        sport: "StaticText",
        coaches: 3,
        uri: "https://picsum.photos/200/300?random=1"
    }
]
