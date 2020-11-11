import React from "react";

import { View, SafeAreaView, Image, Text } from "react-native";
import { Fontisto, Feather } from '@expo/vector-icons'; 

import { Col, Row, Grid, Container, Header, Left, Body, Right, Icon, Title, Button, Content, Card, CardItem } from 'native-base';
import CustomFont from './CustomFont'
 
 

const DetailsCard = (props: { 
    details_card_type: string, 
    image_type: string, 
    text: string,
    level: number,
    workouts: number,
    minutes: number,
    title_text: string,
    content_text: string,
    sport: string,
    coaches: number
}) => {
    if(props.details_card_type === 'SeriesDetails') return(
        <SeriesDetails
            image_type={props.image_type}
            text={props.text}
            level={props.level}
            workouts={props.workouts}
        />
    ) 
    else if(props.details_card_type === 'WorkoutDetails') return(
        <WorkoutDetails
            image_type={props.image_type}
            text={props.text}
            level={props.level}
            minutes={props.minutes}
        />
    )
    else if(props.details_card_type === 'DrillDetails') return(
        <DrillDetails
            image_type={props.image_type}
            text={props.text}
            level={props.level}
        />    
    )
    else if(props.details_card_type === 'OtherDetails') return(
        <OtherDetails
            image_type={props.image_type}
            title_text={props.title_text}
            content_text={props.content_text}
        />
    )
    else if(props.details_card_type === 'SportSelectionDetails') return(
        <SportSelectionDetails
            image_type={props.image_type}
            sport={props.sport}
            coaches={props.coaches}
            workouts={props.workouts}
        />
    )
} 
 
export default DetailsCard
 
 

const SeriesDetails = (props: {
    image_type: string,
    text: string, 
    level: number, 
    workouts: number
}) => {
    return(
        <View 
            style={props.image_type === 'HeroImage' ?
                { position: 'absolute', marginLeft: 32, bottom: 32 }
                :
                null
            }
        >
            <CustomFont 
                font_type={'CopyText'} 
                text={props.text} 
                image_type={props.image_type} 
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomFont font_type={'CopySmall'} text={'Level: '} image_type={props.image_type} />
                
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
                />
                <CustomFont font_type={'CopySmall'} text={' | '} image_type={props.image_type} />
                
                <CustomFont font_type={'CopySmall'} text={'Workouts: ' + props.workouts} image_type={props.image_type} />
            </View>
        </View>
    )
}


const WorkoutDetails = (props: {
    image_type: string,
    text: string, 
    level: number, 
    minutes: number
}) => {
    return(
        <View 
            style={props.image_type === 'HeroImage' ?
                { position: 'absolute', marginLeft: 32, bottom: 32 }
                :
                null
            }
        >
            <CustomFont font_type={'CopyText'} text={props.text} image_type={props.image_type} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomFont font_type={'CopySmall'} text={'Level: '} image_type={props.image_type} />
                
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
                />
                
                <CustomFont font_type={'CopySmall'} text={' | '} image_type={props.image_type} />

                <Feather name="clock" size={13} color="black" />
                
                <CustomFont font_type={'CopySmall'} text={' ' +props.minutes + 'mins'} image_type={props.image_type} />
            </View>
        </View>
    )
}


const DrillDetails = (props: {
    image_type: string,
    text: string, 
    level: number
}) => {
    return(
        <View 
            style={props.image_type === 'HeroImage' ?
                { position: 'absolute', marginLeft: 32, bottom: 32 }
                :
                null
            }
        >
            <CustomFont font_type={'CopyText'} text={props.text} image_type={props.image_type} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomFont font_type={'CopySmall'} text={'Level: '} image_type={props.image_type} />
                
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
                />
                
            </View>
        </View>
    )
}


const OtherDetails = (props: {
    image_type: string,
    title_text: string, 
    content_text: string
}) => {
    return(
        <View 
            style={props.image_type === 'HeroImage' ?
                { position: 'absolute', marginLeft: 32, bottom: 32 }
                :
                null
            }
        >
            <CustomFont font_type={'CopyText'} text={props.title_text} image_type={props.image_type} />
            <CustomFont font_type={'CopySmall'} text={props.content_text} image_type={props.image_type} />
        </View>
    )
}


const SportSelectionDetails = (props: {
    image_type: string,
    sport: string, 
    coaches: number, 
    workouts: number
}) => {
    

    return(
        <View 
            style={props.image_type === 'HeroImage' ?
                { position: 'absolute', marginLeft: 32, bottom: 32 }
                :
                null
            }
        >
            <CustomFont font_type={'Subtitle'} text={props.sport} image_type={props.image_type} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomFont font_type={'CopySmall'} text={props.coaches + ' coaches'} image_type={props.image_type} />

                <CustomFont font_type={'CopySmall'} text={' | '} image_type={props.image_type} />

                <CustomFont font_type={'CopySmall'} text={props.workouts + ' workouts'} image_type={props.image_type} />
            </View>
        </View>
    )
}