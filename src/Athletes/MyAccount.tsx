import React, { useState, useEffect } from 'react';
import { Pressable, Modal, TouchableHighlight, Text, Button, StyleSheet, View, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';
import FullCardCarousel from '../GlobalComponents/FullCardCarousel'
import CustomList from '../GlobalComponents/CustomList'
import ListWithImage from '../GlobalComponents/ListWithImage'
import CustomFormField from '../GlobalComponents/CustomFormField'
import CustomFont from '../GlobalComponents/CustomFont'


const MyAccount = () => {
    
    const [modalVisible, setModalVisible] = useState(false);
    
    return(
        <View style={styles.container}>
        
            <CustomFont 
                font_type="Subtitle"
                text="Support"
            />   

            {/* LIST */}
            <View style={{ marginTop: 15 }}>
            
                <View style={styles.lineStyle}></View>            
            
            

                    <Pressable
                        style={styles.listItemStyle}
                        onPress={() => setModalVisible(true)}
                    >
                        <CustomFont 
                            font_type={'CopyText'} 
                            text={'Product feedback'} 
                            image_type={''}
                            color={'rgb(84,84,84)'}
                        />

                    </Pressable>


                <View style={styles.lineStyle}></View>                
                
                <Pressable
                    style={styles.listItemStyle}
                    onPress={() => setModalVisible(true)}
                >
                    <CustomFont 
                        font_type={'CopyText'} 
                        text={'App support'} 
                        image_type={''}
                        color={'rgb(84,84,84)'}
                    />
                </Pressable>
                
                <View style={styles.lineStyle}></View>                
                
                <Pressable
                    style={styles.listItemStyle}
                    onPress={() => setModalVisible(true)}
                >                    
                    <CustomFont 
                        font_type={'CopyText'} 
                        text={'Product Ideas'} 
                        image_type={''}
                        color={'rgb(84,84,84)'}
                    />
                </Pressable>                
                
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
            
            

            <HelpModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            
            
            
            
            
        </View>
    )
}

export default MyAccount



const HelpModal = (props: { modalVisible: boolean, setModalVisible: Function }) => {
    return(
        <Modal
            visible={props.modalVisible}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>We're here to help</Text>

                    <View style={{ marginTop: 24 }}></View>

                    <Text>Send us an email at support@striveapp.com and we'll get back to you ASAP</Text>

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => props.setModalVisible(!props.modalVisible)}
                    >
                        <Text style={styles.textStyle}>Done</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>    
    )
}




const styles = StyleSheet.create({
    container: {
        marginLeft: 24,
        marginRight: 24,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});