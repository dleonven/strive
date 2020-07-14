import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Auth } from 'aws-amplify';
import { Container, Header, Left, Body, Right, Icon, Title, Button } from 'native-base';



const Home = () => {
    return(
        <Container>
            <Header>
                <Left>
                <Button transparent>
                <Icon name='arrow-back' />
                </Button>
                </Left>
                <Body>
                <Title>My Coach</Title>
                </Body>
                <Right>
                <Button transparent>
                <Icon name='menu' />
                </Button>
                </Right>
            </Header>
            
        </Container>
    )
}

export default Home