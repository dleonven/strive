import React from "react";

import { View, Text } from "react-native";


interface FullCardProps {
    title: string
    link_text?: string
    ImageComponent?: React.ReactNode
    DetailComponent?: React.ReactNode
}

export const FullCard = (props: FullCardProps) => {
    return(
        <View>
            <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24
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
                    {props.link_text}                           
                </Text>                
            
            </View>
            <View>
                {props.ImageComponent}
                {props.DetailComponent}
            </View>
        </View>
    )
}

