import React from 'react';
import { StyleSheet, View } from 'react-native';
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
