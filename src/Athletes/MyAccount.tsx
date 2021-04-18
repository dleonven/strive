import React, { useState, useEffect } from 'react';
import { TouchableHighlight, Text, Button, StyleSheet, View, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../GlobalComponents/FullCardCarousel'
import CustomList from '../GlobalComponents/CustomList'
import ListWithImage from '../GlobalComponents/ListWithImage'
import CustomFormField from '../GlobalComponents/CustomFormField'
import CustomFont from '../GlobalComponents/CustomFont'


const MyAccount = () => {
    return(
        <View style={styles.container}>
        
            <CustomFont 
                font_type="Subtitle"
                text="Support"
            />   

            {/* LIST */}
            <View style={{ marginTop: 15 }}>
            
                <View style={styles.lineStyle}></View>            
            
                <View style={styles.listItemStyle}>
                    <CustomFont 
                        font_type={'CopyText'} 
                        text={'Product feedback'} 
                        image_type={''}
                        color={'rgb(84,84,84)'}
                    />
                </View>
                
                <View style={styles.lineStyle}></View>                
                
                <View style={styles.listItemStyle}>
                    <CustomFont 
                        font_type={'CopyText'} 
                        text={'App support'} 
                        image_type={''}
                        color={'rgb(84,84,84)'}
                    />
                </View>
                
                <View style={styles.lineStyle}></View>                
                
                <View style={styles.listItemStyle}>
                    <CustomFont 
                        font_type={'CopyText'} 
                        text={'Product Ideas'} 
                        image_type={''}
                        color={'rgb(84,84,84)'}
                    />
                </View>                
                
                <View style={styles.lineStyle}></View>
            </View>        
            
            
            
            <TouchableHighlight 
                style={styles.button} 
                onPress={async () => await Auth.signOut()}
            >
                <Text style={{ 
                    fontFamily: "BioSans-SemiBold",
                    fontSize: 16,
                    color: "rgb(255,255,255)",
                    letterSpacing: 1.6,
                    alignSelf: 'center'
                }}>
                    LOG OUT
                </Text>
            </TouchableHighlight>
            
            

            
            
            
            
        </View>
    )
}

export default MyAccount





const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 24,
        marginRight: 24
    },
    listItemStyle: {
        marginLeft: 6,
        marginTop: 18, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(236,235,235)',
    },
    button: {
        alignSelf: "stretch",
        marginTop: 32,
        height: 56,
        backgroundColor: 'rgb(55,54,54)',
        textDecorationLine: 'underline',
        justifyContent: 'center',
        borderRadius: 4
    }
});
