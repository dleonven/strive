import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions, Image } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Series from './Series'
import CustomFont from '../../GlobalComponents/CustomFont'

const MyCoach = () => {
    return(
        <View style={{ 
            flex: 1, 
            backgroundColor: '#fff',
            //marginRight: 41
        }}>
        
            <CoachDetails/>
            <MyCoachTabs/>
        </View>
    )
}


export default MyCoach

const CoachDetails = () => {
    return(
        <View style={{
            marginLeft: 24,
            //marginRight: 41,
            flexDirection: 'row'
        }}>
            <Image
                style={{ width: 66, height: 66, borderRadius: 4 }}
                source={{
                    uri: "https://picsum.photos/200/300?random=1",
                }}
            />            
        
            <View style={{ marginLeft: 16 }}>
                <CustomFont
                    font_type="ContentTitle"
                    text="GARY MAITLAND"
                /> 
                <CustomFont
                    font_type="CopySmall"
                    text="Gary Maitland is a NBA Skills Coach and the founder of CoachMaitland..."
                    color="rgb(84,84,84)"
                />
            </View>
        </View>
    )
}


const MyCoachTabs = () => {
    
    const [index, setIndex] = React.useState(0);
    
    const [routes] = React.useState([
        { key: 'series', title: 'Series' },
        { key: 'workouts', title: 'Workouts' },
    ]);
    
    const renderScene = SceneMap({
        series: Series,
        workouts: Workouts,
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

const renderTabBar = props => (
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


const Workouts = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

