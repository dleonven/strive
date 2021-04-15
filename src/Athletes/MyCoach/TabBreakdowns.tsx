import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, TouchableHighlight,Image, StyleSheet, View, ScrollView, TextInput, Text, Dimensions } from 'react-native';
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


const TabBreakdowns = () => (
    <View style={styles.container}>
        
        <View style={{ marginBottom: 33 }}></View>
        
        {data.map((item, index) => {
            return( 
                <BreakdownsCarousel
                    key={index}
                    breakdowns={item}
                />              
            )
        })}
    
    </View>
);

export default TabBreakdowns


const BreakdownsCarousel = (props: {breakdowns: any}) => {
    return(
        
        <View>
        
            <CarouselHeader
                title={props.breakdowns.title}
                linkText={props.breakdowns.linkText}
            />              
        
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {props.breakdowns.items.map((item: any, index: any) => {
                    return( 
                        <View style={styles.gridItem} key={index}>
                            <BreakdownFullCard item={item}/>                            
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

const BreakdownFullCard = (props: {item: any}) => {

    const navigation = useNavigation();
    
    return( 
        <TouchableWithoutFeedback
            //activeOpacity={0.6}
            //underlayColor="#DDDDDD"
            onPress={() => navigation.navigate("Breakdowns")} 
        >        
            <View style={{ marginRight: 16 }}>
                <BreakdownImage uri={props.item.uri}/>
            </View>
        </TouchableWithoutFeedback>          
    )
}


const BreakdownImage = (props: {uri: string}) => {
    return( 
        <View>
            <Image
                style={{ width: 327, height: 296, borderRadius: 12 }}
                source={{
                    uri: props.uri,
                }}
            />
            
            <View style={{ position: 'absolute', marginLeft: 16, bottom: 23 }}>            
                <Text style={{ 
                    fontSize: 28, 
                    fontFamily: 'BioSans-ExtraBoldItalic',
                    color: 'rgb(255,255,255)',
                    textShadowColor: 'rgba(0,0,0,0.8)',
                    textShadowOffset: {width: 2, height: 2}
                }}>
                    #StaticTextForNow
                </Text>
            </View>    
        </View>  
    )
}




const data = [
    {
        title:  'Breakdown 1',
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
        title:  'Breakdown 2',
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
        marginBottom: 48,
        flex: 1,
    },  
    overlay: {
        opacity: 0.5,
        backgroundColor: '#000000'
    },
    
});