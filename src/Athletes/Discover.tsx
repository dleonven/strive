import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../GlobalComponents/FullCardCarousel'
import CustomList from '../GlobalComponents/CustomList'
import ListWithImage from '../GlobalComponents/ListWithImage'
import CustomFormField from '../GlobalComponents/CustomFormField'
import CustomFont from '../GlobalComponents/CustomFont'


const Discover = () => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <CustomFont 
                    font_type="Subtitle"
                    text="Search"
                />            
            </View>
        </View>
    )
}

export default Discover


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    content: {
        marginLeft: 24,
        marginRight: 24
    }
});
