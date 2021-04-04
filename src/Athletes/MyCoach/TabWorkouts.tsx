import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, Dimensions } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';


const TabWorkouts = () => (
    <ScrollView 
        style={{
            flex: 1
        }}
    >
        <FullCardCarousel
            title={'Title'}
            image_type='LargeImage'
            detail_type='WorkoutDetails'
            input={input}
        />
        <FullCardCarousel
            title={'Title'}
            image_type='LargeImage'
            detail_type='WorkoutDetails'
            input={input}
        />
    </ScrollView>
);

export default TabWorkouts




const input = [
    {
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


