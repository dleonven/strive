import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Auth } from 'aws-amplify';
import { Col, Row, Grid, Container, Header, Left, Body, Right, Icon, Title, Button, Content, Card, CardItem, Text } from 'native-base';
import FullCardCarousel from '../GlobalComponents/FullCardCarousel'
import CustomList from '../GlobalComponents/CustomList'
import ListWithImage from '../GlobalComponents/ListWithImage'
import CustomFormField from '../GlobalComponents/CustomFormField'


const Home = () => {
    return(
        <Container>
            <Content>
                <CustomFormField/>
            </Content>
        </Container>
    )
}

export default Home

