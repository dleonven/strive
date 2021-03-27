import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image, TouchableHighlight } from "react-native";

import Carousel from "react-native-snap-carousel";
import {image_type, detail_type} from '../GlobalTypes'


import { FullCard } from '../GlobalComponents/FullCard'
import CustomImage from '../GlobalComponents/CustomImage'
import DetailsCard from '../GlobalComponents/DetailsCards'
import { useNavigation } from '@react-navigation/native';


interface ItemProps {
    text?: string;
    minutes?: number;
    level?: number;
    workouts?: number;
    title_text?: string;
    content_text?: string;
    sport?: string;
    coaches?: number;
    uri: string;
}

interface FullCardCarouselProps {
    title: string
    linkText?: string
    image_type: image_type
    detail_type?: detail_type
    input: ItemProps[]
}


const FullCardCarousel = (props: FullCardCarouselProps) => {
    
    const navigation = useNavigation();

    const { image_type, detail_type } = props
    
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [carouselItems, setCarouselItems] = useState<ItemProps[]>(props.input);
    const ref = useRef(null);
    
    const renderItem = useCallback( (props: {item: ItemProps, index: number}) => {
    

        return (
            
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {

                    switch(detail_type) {
                        case "SeriesDetails":
                            navigation.navigate("Series")
                            break
                        case "WorkoutDetails":
                            navigation.navigate("Workout")
                            break
                        case "DrillDetails":
                            navigation.navigate("Drill")
                            break
                    }
                    
                }} 
            >
                <View
                    style={{
                    }}
                >
                    <FullCard

                        ImageComponent={
                            <CustomImage
                                image_type={image_type}
                                uri={props.item.uri}
                            />
                        }
    
                        DetailComponent={!!detail_type ?
                            <DetailsCard
                                details_card_type={detail_type}
                                image_type={image_type}
                                text={props.item.text}
                                level={props.item.level}
                                workouts={props.item.workouts}   
                                minutes={props.item.minutes}
                                title_text={props.item.title_text}
                                content_text={props.item.content_text} 
                                sport={props.item.sport}
                                coaches={props.item.coaches}                            
                            /> 
                            :
                            null
                        }
                    />              
                </View>            

            </TouchableHighlight>          
        );
    }, []);

    const getItemWidth = () => {
        if(image_type === "XLargeImage") return 309
        if(image_type === "LargeImage") return 209
        if(image_type === "SmallImage") return 147
        if(image_type === "MediumImage") return 152
        if(image_type === "XXLargeImage") return 327
    }

    return (
        <View style={{ 
            flex: 1, 
            flexDirection: "column", 
            marginTop: 33
        }}>
        
            <CarouselItemHeader
                title={props.title}
                linkText={props.linkText}
            />          
        
            <View style={{ 
                flexDirection: "row", 
                justifyContent: "center",
                backgroundColor: 'white'
            }}>
                
                <Carousel
                    layout={"default"}
                    ref={ref}
                    data={carouselItems}
                    sliderWidth={1}
                    itemWidth={getItemWidth()}
                    renderItem={renderItem}
                    onSnapToItem={(index: number) => setActiveIndex(index)}
                 
                    /* https://github.com/meliorence/react-native-snap-carousel/issues/238#issuecomment-354528113 */
                    removeClippedSubviews={false}                 
                />
        
            </View>

         </View>
    );
};

export default FullCardCarousel;


const CarouselItemHeader = (props: {title: string, linkText: string}) => {
    return(
        
        <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            marginRight: 24
        }}>
        
            {/* TITLE */}
            <Text style={{ 
                fontSize: 23, 
                fontFamily: 'BioSans-SemiBold',
                color: 'rgb(55,54,54)'
            }}>
                {props.title}
            </Text>
            
            
            {/* LINK TEXT */}
            <Text style={{ 
                fontFamily: 'BioSans-Regular', 
                fontSize: 16, 
                color: 'rgb(0, 77, 86)',
                letterSpacing: 0.32,
                textDecorationLine: 'underline',
                textDecorationColor: 'rgb(0, 77, 86)'
            }}>
                {props.linkText}                           
            </Text>                
        
        </View>          
    )
}