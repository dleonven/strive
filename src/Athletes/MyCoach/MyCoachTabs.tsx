import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions, Image } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import TabSeries from './TabSeries'
import TabWorkouts from './TabWorkouts'





const screen = Dimensions.get("screen");
const window  = Dimensions.get("window");

const MyCoachTabs = () => {
    
    const [index, setIndex] = React.useState(0);
    
    const [routes] = React.useState([
        { key: 'series', title: 'Series' },
        { key: 'workouts', title: 'Workouts' },
    ]);
    
    const renderScene = SceneMap({
        series: TabSeries,
        workouts: TabWorkouts,
    });
    
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}

        />
    );
}

export default MyCoachTabs


const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'rgb(0,77,86)'}}
        style={{ backgroundColor: 'white' }}
        labelStyle={{ 
            fontFamily: 'BioSans-SemiBold',
            fontSize: 16,
            color: 'rgb(0,77,86)' 
        }}
    />
);

const initialLayout = { 
    width: Dimensions.get('window').width 
};

