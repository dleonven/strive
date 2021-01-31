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
import TabDrills from './TabDrills'
import TabBreakdowns from './TabBreakdowns'


const MyCoachTabs = () => {
    
    const [index, setIndex] = React.useState(0);
    
    const [routes] = React.useState([
        { key: 'series', title: 'Series' },
        { key: 'workouts', title: 'Workouts' },
        { key: 'drills', title: 'Drills' },
        { key: 'breakdowns', title: 'Breakdowns' },
    ]);
    
    const renderScene = SceneMap({
        series: TabSeries,
        workouts: TabWorkouts,
        drills: TabDrills,
        breakdowns: TabBreakdowns,
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
        scrollEnabled        
    />
);

const initialLayout = { 
    width: Dimensions.get('window').width 
};

