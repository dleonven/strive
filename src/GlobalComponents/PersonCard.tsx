import React, { useState, useEffect,  useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions, Alert, Button, TextInput, View, StyleSheet, Text, Animated } from 'react-native';
import CustomFont from './CustomFont'


const PersonCard = (props: {name: string, backgroundColor: string, textColor: string}) => {
    return(

            <View style={{ 
                flexDirection: 'row', 
                backgroundColor: props.backgroundColor,
                marginTop: 12
            }}>
                <Image
                    style={{ 
                        width: 22, 
                        height: 22, 
                        borderRadius: 150/2,
                        marginRight: 8
                    }}
                    source={{
                        uri: "https://picsum.photos/200/300?random=1",
                    }}
                />     
                
                <CustomFont
                    font_type="CopyText"
                    text={props.name}
                    color={props.textColor}
                /> 
                
            </View>
            
            
            

    )
}


export default PersonCard