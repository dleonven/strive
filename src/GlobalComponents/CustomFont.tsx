import React from "react";

import { Text } from "react-native";
import {font_type} from '../GlobalTypes'

interface FontProps {
    text: string
    image_type?: string,
    color?: string
}

const CustomFont = (props: { 
    font_type: font_type 
    text: string, 
    image_type?: string,
    color?: string
}) => {
    
    switch(props.font_type) {
        case 'BigTitle':
            return <BigTitle 
                        text={props.text} 
                        image_type={props.image_type}
                        color={props.color}
                    />
        case 'Subtitle':
            return <Subtitle 
                        text={props.text} 
                        image_type={props.image_type}
                        color={props.color}
                    />
        case 'ContentTitle':
            return <ContentTitle 
                        text={props.text} 
                        image_type={props.image_type}
                        color={props.color}
                    />
        case 'CopyText':
            return <CopyText 
                        text={props.text} 
                        image_type={props.image_type}
                        color={props.color}
                    />
        case 'CopySmall':
            return <CopySmall 
                        text={props.text} 
                        image_type={props.image_type}
                        color={props.color}
                    />
    }
}

export default CustomFont

const BigTitle = (props: FontProps) => {
    
    return(
        <Text
            style={props.image_type === 'HeroImage' ?
                {fontSize: 26, fontFamily: 'BioSans-Bold', color: 'white'}
                :
                {fontSize: 26, fontFamily: 'BioSans-Bold'}
            }
        >
            {props.text}
        </Text>
    )
}

const Subtitle = (props: FontProps) => {
    
    return(
        <Text 
            style={props.image_type === 'HeroImage' ?
                {fontSize: 23, fontFamily: 'BioSans-SemiBold', color: 'white'}
                :
                {fontSize: 23, fontFamily: 'BioSans-SemiBold'}
            }        
        >
            {props.text}
        </Text>
    )
}

const ContentTitle = (props: FontProps) => {
    
    return(
        <Text 
            style={props.image_type === 'HeroImage' ?
                {fontSize: 18, fontFamily: 'BioSans-SemiBold', color: 'white'}
                :
                {fontSize: 18, fontFamily: 'BioSans-SemiBold'}
            }
        >
            {props.text}
        </Text>
    )
}

const CopyText = (props: FontProps) => {
    
    return(
        <Text 
            style={props.image_type === 'HeroImage' ?
                {fontSize: 16, fontFamily: 'BioSans-Regular', color: 'white'}
                :
                {fontSize: 16, fontFamily: 'BioSans-Regular'}
            }
        >
            {props.text}
        </Text>
    )
}

const CopySmall = (props: FontProps) => {
    
    return(
        <Text 
            style={props.image_type === 'HeroImage' ?
                {fontSize: 14, fontFamily: 'BioSans-Regular', color: 'white'}
                :
                !!props.color ?
                    {fontSize: 14, fontFamily: 'BioSans-Regular', color: props.color}
                    :
                    {fontSize: 14, fontFamily: 'BioSans-Regular'}
            }
        >
            {props.text}
        </Text>
    )
}


