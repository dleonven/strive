import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import CustomFont from './CustomFont'
import { Fontisto, Feather } from '@expo/vector-icons'; 
import {font_type} from '../GlobalTypes'


interface CustomListProps {
    data: {
        id: string,
        text: string,
        additionalText: string        
    }[]
    icon_type?: 'Heart' | 'Money' | 'TextIcon'
    font_type: font_type 
}


const CustomList = (props: CustomListProps) => {
    return (
        <SafeAreaView>
            <FlatList
                data={props.data}
                renderItem={item_object => {

                    return(
                        <ListItem
                            icon_type={props.icon_type}
                            font_type={props.font_type}
                            text={item_object.item.text}
                            additionalText={item_object.item.additionalText}
                            
                        />                        
                    )
                }}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default CustomList


interface ListItemProps {
    icon_type?: string
    font_type: font_type
    text: string
    additionalText?: string
}

const ListItem = (props: ListItemProps) => {
    return(
        <View>
            <View style={styles.listItemStyle}>
                <CustomFont 
                    font_type={props.font_type} 
                    text={props.text} 
                    image_type={''}
                />
                {props.icon_type === 'Heart' &&
                    <Heart 
                        additionalText={props.additionalText}
                    />
                }
                {props.icon_type === 'TextIcon' &&
                    <TextIcon
                        additionalText={props.additionalText}
                    />
                }
            </View>
            <View style={styles.lineStyle}></View>
        </View>
    )
}

const Heart = (props: {additionalText?: string}) => {
    return(
        <View style={styles.heartStyle}>
            <Fontisto
                name="heart" 
                size={24} 
                color={'rgb(244,102,102)'} 
            /> 
            <View style={{position: 'absolute'}}>
                <Text style={{ color: 'rgb(255,255,255)' }}>{props.additionalText}</Text>
            </View>
        </View>
    )
}


const TextIcon = (props: {additionalText?: string}) => {
    return(
        <Text 
            style={{ fontSize: 16, fontFamily: 'BioSans-Bold', color: 'rgb(0,77,86)' }}
        >
            {props.additionalText}
        </Text>
    )
}


const styles = StyleSheet.create({
    listItemStyle: {
        marginTop: 16, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(236,235,235)',
    },
    heartStyle: {
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
 });


