import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Auth } from 'aws-amplify';
import { Col, Row, Grid, Container, Header, Left, Body, Right, Icon, Title, Button, Content, Card, CardItem, Text } from 'native-base';
import PhotosCarousel from './PhotosCarousel'


const Home = () => {
    return(
        <Container>
            <ChooseSportHeader/>
            
            <Content>
                <Card transparent>
                    <CardItem>
                        <Body>
                            <Text style={{ fontFamily: 'BioSans-SemiBold', fontSize: 23 }}>
                                Expert coaches, multiple sports, endless opportunity.                            
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                
                
                <Card transparent>
                    <CardItem>
                        <Body>
                            <Text style={{ fontFamily: 'BioSans-LightItalic', fontSize: 19, color: 'rgb(84, 84, 84)' }}>
                                What sport are you working on today?                            
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                
                
                <View style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{ 
                        fontFamily: 'BioSans-SemiBold', 
                        fontSize: 18, 
                        color: 'rgb(84, 84, 84)' 
                    }}>
                        Top Sports                           
                    </Text>

                    <Text style={{ 
                        fontFamily: 'BioSans-Regular', 
                        fontSize: 16, 
                        color: 'rgb(0, 77, 86)',
                        //textDecorationLine: 'underline'
                    }}>
                        See All                           
                    </Text>
                </View>   
                
                
                <PhotosCarousel/>
                
                
                
                
            </Content>
            
            
        </Container>
    )
}

export default Home




const ChooseSportHeader = () => {
    return(
        <Header style={{ marginLeft: 24, marginRight: 24 }}>
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Choose a Sport</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
    
    
    
    )
}

