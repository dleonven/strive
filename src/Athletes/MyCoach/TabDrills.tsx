import React, { useState, useEffect } from 'react';
import { TouchableHighlight, Image, StyleSheet, View, ScrollView, TextInput, Text, Dimensions } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListWithImage from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import CustomFont from '../../GlobalComponents/CustomFont'
import { Fontisto, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const TabDrills = () => (
    <View style={styles.container}>
        
        <View style={{ marginBottom: 33 }}></View>
        
        {data.map((item, index) => {
            return( 
                <DrillsCarousel
                    key={index}
                    drills={item}
                />              
            )
        })}
    
    </View>
);

export default TabDrills


const DrillsCarousel = (props: {drills: any}) => {
    return(
        
        <View>
        
            <CarouselHeader
                title={props.drills.title}
                linkText={props.drills.linkText}
            />              
        
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {props.drills.items.map((item: any, index: any) => {
                    return( 
                        <View style={styles.gridItem} key={index}>
                            <DrillFullCard item={item}/>                            
                        </View>                
                    )
                })}
            </ScrollView>
        </View>
        

    )
}

const CarouselHeader = (props: {title: string, linkText: string}) => {
    return(
        
        <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            marginRight: 24
        }}>
        
            {/* TITLE */}
            <Text style={{ 
                fontSize: 23, 
                fontFamily: 'BioSans-SemiBold',
                color: 'rgb(55,54,54)'
            }}>
                {props.title}
            </Text>
            
            
            {/* LINK TEXT */}
            <Text style={{ 
                fontFamily: 'BioSans-Regular', 
                fontSize: 16, 
                color: 'rgb(0, 77, 86)',
                letterSpacing: 0.32,
                textDecorationLine: 'underline',
                textDecorationColor: 'rgb(0, 77, 86)'
            }}>
                {props.linkText}                           
            </Text>                
        
        </View>          
    )
}


const DrillFullCard = (props: {item: any}) => {
    
    const navigation = useNavigation();
    
    
    return( 
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate("Drill")} 
        >        
            <View style={{ marginRight: 16 }}>
                <DrillImage uri={props.item.uri}/>
                <DrillDetails
                    itemTitle={props.item.itemTitle}
                    text={props.item.text}
                    level={props.item.level}
                    workouts={props.item.workouts}
                />
            </View>
        </TouchableHighlight>          
        
    )
}

const DrillImage = (props: {uri: string}) => {
    return( 
        <View>
            <Image
                style={{ width: 147, height: 105, borderRadius: 4 }}
                source={{
                    uri: props.uri,
                }}
            />
        </View>
    )
}

interface DrillDetailsProps {
    itemTitle: string,
    text: string, 
    level: number, 
    workouts: number
}

const DrillDetails = (props: DrillDetailsProps) => {
    return(
        <View>
            <View style={{ marginTop: 12 }}></View>

            <Text style={{ fontSize: 16, fontFamily: 'BioSans-SemiBold', color: '#373636' }}>{props.itemTitle}</Text>

            <View style={{ marginBottom: 5 }}></View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomFont color={'#545454'} font_type={'CopySmall'} text={'Level: '} />
                
                <Fontisto
                    name="ellipse" 
                    size={6} 
                    color={props.level > 0 ? 'rgb(0,77,86)' : 'rgb(200,199,199)'} 
                    style={{ marginRight: 5 }}
                />
                
                <Fontisto 
                    name="ellipse" 
                    size={6} 
                    color={props.level > 1 ? 'rgb(0,77,86)' : 'rgb(200,199,199)'} 
                    style={{ marginRight: 5 }}
                /> 
                
                <Fontisto 
                    name="ellipse" 
                    size={6} 
                    color={props.level > 2 ? 'rgb(0,77,86)' : 'rgb(200,199,199)'} 
                    style={{ marginRight: 12 }}
                />
                

            </View>
        </View>
    )
}

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





const data = [
    {
        title:  'Drill 1',
        linkText: 'See All',
        items: [
            {
                minutes: 5,
                level: 3,
                workouts: 2,
                title_text: "StaticText",
                content_text: "StaticText",
                sport: "StaticText",
                coaches: 3,
                uri: "https://picsum.photos/200/300?random=1",
                itemTitle: "Item 1 Title"
            },
            {
                minutes: 5,
                level: 3,
                workouts: 2,
                title_text: "StaticText",
                content_text: "StaticText",
                sport: "StaticText",
                coaches: 3,
                uri: "https://picsum.photos/200/300?random=1",
                itemTitle: "Item 2 Title"
            }            
        ]
    },
    {
        title:  'Drill 2',
        linkText: 'See All',
        items: [
            {
                minutes: 5,
                level: 3,
                workouts: 2,
                title_text: "StaticText",
                content_text: "StaticText",
                sport: "StaticText",
                coaches: 3,
                uri: "https://picsum.photos/200/300?random=1",
                itemTitle: "Item 1 Title"
            },
            {
                minutes: 5,
                level: 3,
                workouts: 2,
                title_text: "StaticText",
                content_text: "StaticText",
                sport: "StaticText",
                coaches: 3,
                uri: "https://picsum.photos/200/300?random=1",
                itemTitle: "Item 2 Title"
            }            
        ]
    }
    
    
]






const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 24
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