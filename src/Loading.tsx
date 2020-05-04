import React, { useState, useContext } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';



const Loading = () => {
    return(
        <View>
            <Image 
                source={require('../assets/strive-loader.gif')} 
                style={{backgroundColor: 'red', width: 300, height: 300}}
            />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        backgroundColor: '#ecf0f1',
    }
})
