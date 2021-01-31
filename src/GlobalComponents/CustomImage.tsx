import React from "react";

import { View, SafeAreaView, Image, Text } from "react-native";
import { Fontisto, Feather } from '@expo/vector-icons'; 

import { Col, Row, Grid, Container, Header, Left, Body, Right, Icon, Title, Button, Content, Card, CardItem } from 'native-base';



const CustomImage = (props: { image_type: string, uri: string }) => {
    if(props.image_type === 'SmallImage') return <SmallImage uri={props.uri} />
    else if(props.image_type === 'MediumImage') return <MediumImage uri={props.uri}/>
    else if(props.image_type === 'LargeImage') return <LargeImage uri={props.uri}/>
    else if(props.image_type === 'XLargeImage') return <XLargeImage uri={props.uri}/>
    else if(props.image_type === 'HeroImage') return <HeroImage uri={props.uri}/>
    else if(props.image_type === 'XXLargeImage') return <XXLargeImage uri={props.uri}/>
    
} 

export default CustomImage

const SmallImage = (props: {uri: string}) => {
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


const MediumImage = (props: {uri: string}) => {
    return(
        <View>
            <Image
                style={{ width: 152, height: 184, borderRadius: 4 }}
                source={{
                    uri: props.uri,
                }}
            />
        </View>
    )
}


const LargeImage = (props: {uri: string}) => {
    return(
        <View>
            <Image
                style={{ width: 209, height: 253, borderRadius: 4 }}
                source={{
                    uri: props.uri,
                }}
            />
        </View>
    )
}


const XLargeImage = (props: {uri: string}) => {
    return(
        <View>
            <Image
                style={{ width: 309, height: 280, borderRadius: 4 }}
                source={{
                    uri: props.uri,
                }}
            />
            
            <View style={{ position: 'absolute', marginLeft: 16, bottom: 23 }}>            
                <Text style={{ 
                    fontSize: 26, 
                    fontFamily: 'BioSans-ExtraBoldItalic',
                    color: 'rgb(255,255,255)',
                    textShadowColor: 'rgba(0,0,0,0.6)',
                    textShadowOffset: {width: 2, height: 2}
                }}>
                    #StaticTextForNow
                </Text>
            </View>    
        </View>
    )
}


const HeroImage = (props: {uri: string}) => {
    return(
        <View>
            <Image
                style={{ width: 306, height: 369, borderRadius: 4 }}
                source={{
                    uri: props.uri,
                }}
            />
        </View>
    )
}

const XXLargeImage = (props: {uri: string}) => {
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