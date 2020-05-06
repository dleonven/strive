import React, { useState, useContext } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';



const Loading = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        //padding: 8,
        flex: 1,
        justifyContent: "center"
        //backgroundColor: '#ecf0f1',
    }
})

