import React, { useState, useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback, Animated, ScrollView, StyleSheet, View, TextInput, Text, Dimensions, Image } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
//import MyCoachTabs from './MyCoachTabs'
import CustomFont from '../../GlobalComponents/CustomFont'
import TabSeries from './TabSeries'
import TabWorkouts from './TabWorkouts'
import TabDrills from './TabDrills'
import TabBreakdowns from './TabBreakdowns'

const HEADER_HEIGHT = 66
const TABS_DATA = [
    {
        title: "Series"
    },
    {
        title: "Workouts"
    },
    {
        title: "Drills"
    },
    {
        title: "Breakdowns"
    },
];

const SPECIALTIES_DATA = ['Shooting', 'Fundamentals', 'Scoring', 'Coaching']


const MyCoach = () => {
    
    
    const [activeTab, setActiveTab] = useState('Series')


    const renderActiveTab = () => {
        switch(activeTab) {
            case 'Series':
                return <TabSeries/>
            case 'Workouts':
                return <TabWorkouts/>
            case 'Drills':
                return <TabDrills/>                
            default:
        }
    }
    

    return(
        <ScrollView
            stickyHeaderIndices={[1]}
            style={{
                flex: 1, 
                marginLeft: 24,
                //height: '100%'
                //marginRight: 41
            }}
        >

            <Header/>

            <MyCoachTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            
            {renderActiveTab()}

        </ScrollView>
    )
}


export default MyCoach


const Header = () => {
    return(
        <View>
            <CoachDetails/>
            
            <CoachSpecializations/>

            <UpgradeBox/>
            
        </View>
    )
}


const CoachDetails = () => {
    return(
        <View style={{
            //marginRight: 100,
            flexDirection: 'row',
        }}>
            <Image
                style={{ width: 66, height: HEADER_HEIGHT, borderRadius: 4 }}
                source={{
                    uri: "https://picsum.photos/200/300?random=1",
                }}
            />            
        
            <View style={{ flex: 1, marginLeft: 16 }}>
                <CustomFont
                    font_type="ContentTitle"
                    text="MIKE DUNN"
                /> 
                
                <CustomFont
                    font_type="CopySmall"
                    text="Mike Dunn is a NBA Skills Coach and the founder of CoachMaitland..."
                    color="rgb(84,84,84)"
                />
            </View>

        </View>
    )
}


const CoachSpecializations = () => {
    return( 
        <View style={{ 
            flexDirection: 'row', 
            marginTop: 16
        }}>
            <Text style={{
                fontSize: 14,
                fontFamily: 'BioSans-SemiBold',
                color: 'rgb(84,84,84)',
                marginRight: 16
            }}>
                Specialises in:
            </Text>
            
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ backgroundColor:  'white' }}
        >
            {SPECIALTIES_DATA.map(item => {
                return(

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'BioSans-SemiBold',
                            color: 'rgb(0,77,86)',
                            marginRight: 8
                        }}>
                            {item}
                        </Text>
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'BioSans-SemiBold',
                            color: 'rgb(0,77,86)',
                            marginRight: 8
                        }}>
                            |
                        </Text>                        
                    </View>
                );
            })}
        </ScrollView>                
            
            
        </View>    
    )
}


const UpgradeBox = () => {
    return( 
        <View style={{
            flex: 1,
            backgroundColor: 'rgb(236,235,235)',
            marginTop: 16,
            marginRight: 24,
            marginBottom: 24,
            borderRadius: 4,
            height: 58
        }}>
            
        
        </View>
    
    )
}

/* HORIZONTAL SCROLLVIEW FOR TABS */
const MyCoachTabs = (props: {activeTab: string, setActiveTab: any}) => {
    
    
    return(
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft:-24 }}
        >
            {TABS_DATA.map(item => {
                return(
                    <TouchableWithoutFeedback
                        onPress={() => props.setActiveTab(item.title)}
                        key={item.title}
                    >
                        {/* https://stackoverflow.com/questions/64085543/react-native-touchablewithoutfeedback-is-not-working */}
                        <View style={{ backgroundColor: 'white' }}>
                            <Tab
                                key={item.title}
                                title={item.title}
                                activeTab={props.activeTab}
                            />                        
                        </View>

                    </TouchableWithoutFeedback>                    
                );
            })}
        </ScrollView>
    )
}



const Tab = (props: { title: string, activeTab: string }) => {
    return(
        <View style={[styles.tab]}>
            <Text style={[styles.tabText, props.activeTab === props.title && styles.activeTabText]}>
                {props.title}
            </Text>
            <View style={[styles.indicator, props.activeTab === props.title && styles.activeIndicator]}></View>
        </View>  
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginTop: 32,
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
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontFamily: 'BioSans-SemiBold',
        fontSize: 16,   
        color: 'rgb(200,199,199)',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 14,
        paddingBottom: 14
    },
    activeTabText: {
        color: 'rgb(0,77,86)'
    },
    indicator: {
        borderColor: 'rgb(200,199,199)',
        borderWidth: 1,
        width: '100%',
    },
    activeIndicator: {
        borderColor: 'rgb(0,77,86)',
    }
});
  
  
  
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