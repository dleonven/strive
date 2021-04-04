import React, { useState, useEffect } from 'react';
import { Animated, FlatList, Image, TouchableWithoutFeedback, StyleSheet, View, ScrollView, TextInput, Text, Dimensions } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import CustomFont from '../../GlobalComponents/CustomFont'


const TabSeries = () => (


    <View style={styles.container}>
        
        {input.map(item => {
            return( 
                <View style={styles.gridItem}>
                    <FullCardCarousel
                        title={'Title'}
                        linkText={'See All'}
                        image_type='XLargeImage'
                        detail_type='SeriesDetails'
                        input={input}
                    />                            
                </View>                
            )
        })}
    
    </View>


);

export default TabSeries




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


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginTop: 32,
        marginLeft: 24
    },
    image: {
        height: 423
    },
    grid: {
        marginTop: 24,
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