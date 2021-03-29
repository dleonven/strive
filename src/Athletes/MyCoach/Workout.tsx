import React, { useState, useEffect,  useRef } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../../GlobalComponents/FullCardCarousel'
import CustomList from '../../GlobalComponents/CustomList'
import ListItem from '../../GlobalComponents/ListWithImage'
import CustomFormField from '../../GlobalComponents/CustomFormField'
import { NavigationContainer } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Keyboard, KeyboardAvoidingView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions, Alert, Button, TextInput, View, StyleSheet, Text, Animated } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import CustomFont from '../../GlobalComponents/CustomFont'
import PersonCard from '../../GlobalComponents/PersonCard'

import { Fontisto, Feather } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get("window");

const Workout = () => {
    


    
    return(
        

        <FlatList 
            contentContainerStyle={{ }}
            ListHeaderComponent={
            
                <View style={styles.container}>
            
                    <CustomFont
                        font_type="BigTitle"
                        text="Two Ball Dribbling"
                    />        
                    
                    <PersonCard 
                        name='Mike Dunn' 
                        backgroundColor='rgb(255,255,255)'
                        textColor="rgb(0,77,86)"
                    />
                    
                    <Details/>

            
                </View>
            }
            data={DATA_LIST_WITH_IMAGE}
            renderItem={({ item }) => {
                return(
                
                <ListItem
                    data_item={item}
                />           
                
                )
            }}
            keyExtractor={(item, index) => index.toString()}
        />     

        
        
    )
};

export default Workout





const Details = () => {
    return(
        <View style={{ 
            width: 327,
            height:238,
            backgroundColor: 'rgb(247,247,247)',
            borderRadius: 4,
            marginTop: 17
        }}>
        </View>    
    )
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 24,
        marginRight: 24,
        backgroundColor: 'rgb(255,255,255)',
    },
});



const DATA_LIST_WITH_IMAGE = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    main_text: '2 Ball In & Outs',
    sub_text: '100 dribbles each arm',
    uri: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    main_text: "ABC's",
    sub_text: '5 rounds x 30 seconds',
    uri: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    main_text: 'Pocket Hangs',
    sub_text: '40 dribbles each arm',
    uri: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    main_text: 'Pocket Hangs',
    sub_text: '40 dribbles each arm',
    uri: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    main_text: 'Pocket Hangs',
    sub_text: '40 dribbles each arm',
    uri: 'https://picsum.photos/200/300?random=1'
  },  
];