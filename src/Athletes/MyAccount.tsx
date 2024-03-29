import React, { useState, useEffect } from 'react';
import { Pressable, Modal, Text, StyleSheet, View } from 'react-native';
import { Auth } from 'aws-amplify';

import CustomFont from '../GlobalComponents/CustomFont'
import { useNavigation } from '@react-navigation/native';


const MyAccount = () => {
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const navigation = useNavigation();


    useEffect(() => {
        if(modalVisible) {

            navigation.setOptions({ 
                cardStyle: { 
                    backgroundColor: 'rgba(55,54,54,0.8)',
                },
                headerStyle: {
                    height: 125,
                    backgroundColor: 'rgba(55,54,54,0.8)',
                    shadowColor: 'transparent'
                },  
            })
        }
        else {
            navigation.setOptions({ 
                cardStyle: { opacity: 1 },
                headerStyle: {
                    height: 125,
                    backgroundColor: 'white',
                    shadowColor: 'transparent'
                },      
            })  
        }
    }, [modalVisible])


    const handleSignOut = async () => {

        try {
            await Auth.signOut()
        }
        catch(error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>

            <CustomFont 
                font_type="Subtitle"
                text="Support"
            />   

            {/* LIST */}
            <View style={{ marginTop: 15 }}>
            
                <View style={[modalVisible ? styles.lineStyleModalVisible : styles.lineStyle]}></View>            
            

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


                <View style={[modalVisible ? styles.lineStyleModalVisible : styles.lineStyle]}></View>            
                
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
                
                <View style={[modalVisible ? styles.lineStyleModalVisible : styles.lineStyle]}></View>            
                
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
                
                <View style={[modalVisible ? styles.lineStyleModalVisible : styles.lineStyle]}></View>            
            </View>        
            
            
            
            <Pressable 
                style={styles.button} 
                onPress={handleSignOut}
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
            </Pressable>
            
            
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

                        <CustomFont 
                            font_type={'Subtitle'} 
                            text={"We're here to help"} 
                            image_type={''}
                            color={'rgb(0,0,0)'}
                        />



                        <View style={{ marginTop: 24 }}></View>

                        <Text style={{
                            fontSize: 16, 
                            fontFamily: 'BioSans-Regular',
                            textAlign: 'center'
                        }}>
                            Send us an email at <Text style={{color: 'rgb(0,77,86)'}}>support@striveapp.com</Text> and we'll get back to you ASAP
                        </Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setModalVisible(!props.modalVisible)}
                        >
                            <Text style={{
                                fontSize: 16, 
                                fontFamily: 'BioSans-SemiBold',    
                                textAlign: 'center',
                                color: 'white'                        
                            }}>
                                DONE
                            </Text>
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
    lineStyleModalVisible: {
        borderWidth: 1,
        borderColor:'grey',
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
        marginTop: 22,
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
        backgroundColor: 'rgb(55,54,54)',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
