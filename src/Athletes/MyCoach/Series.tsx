import React, { useState, useEffect,  useRef } from 'react';
import { ScrollView, FlatList } from 'react-native';
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

            <CustomFont
                font_type="Subtitle"
                text="Workouts"
            />   
            


            <FlatList 
                contentContainerStyle={styles.grid}
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
        flex: 1,
        marginLeft: 24,
        marginRight: 24,
        backgroundColor: 'rgb(255,255,255)',
    },
    grid: {
        marginTop: 24
    },
    gridItem: {
        marginBottom: 32
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
