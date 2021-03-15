import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import CustomFont from './CustomFont'
import { SimpleLineIcons, Feather } from '@expo/vector-icons'; 
import {font_type} from '../GlobalTypes'



interface DataItem {
    id: string,
    main_text: string,
    sub_text: string,
    uri: string 
}


const ListWithImage = (props: { data: DataItem[]  }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={props.data}
                renderItem={item_object => {

                    return(
                        <ListItem
                            data_item={item_object.item}
                        />                        
                    )
                }}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default ListWithImage



const ListItem = (props: { data_item: DataItem }) => {
    return(
        <View>
            <View style={styles.listItemStyle}>
                <View style={styles.listItemContentStyle}>
                    <Image
                        style={{ width: 84, height: 52, borderRadius: 4 }}
                        source={{
                            uri: props.data_item.uri,
                        }}
                    />
                    
                    {/* TEXTS */}
                    <View style={styles.listItemTextsStyle}>
                        <MainText 
                            main_text={props.data_item.main_text} 
                        />
                        <SubText 
                            sub_text={props.data_item.sub_text} 
                        />  
                    </View>                
                </View>

                <SimpleLineIcons
                    name="arrow-right" 
                    size={16} 
                    color={'rgb(0,0,0)'} 
                />            
            </View>
            <View style={styles.lineStyle}></View>
        </View>
    )
}

const MainText = (props: { main_text: string }) => {
    return(
        <Text 
            style={{ fontSize: 16, fontFamily: 'BioSans-SemiBold'}}
        >
            {props.main_text}
        </Text>
    )    
}

const SubText = (props: { sub_text: string }) => {
    return(
        <Text 
            style={{ fontSize: 14, fontFamily: 'BioSans-Regular', color: 'rgb(84,84,84)'}}
        >
            {props.sub_text}
        </Text>
    )    
}



const styles = StyleSheet.create({
    listItemStyle: {
        marginTop: 16, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    listItemContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemTextsStyle: {
        marginLeft: 16
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(236,235,235)',
    }
 });


