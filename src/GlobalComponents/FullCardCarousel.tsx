import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image, TouchableHighlight } from "react-native";

import Carousel from "react-native-snap-carousel";
import {image_type, detail_type} from '../GlobalTypes'


import { FullCard } from '../GlobalComponents/FullCard'
import CustomImage from '../GlobalComponents/CustomImage'
import DetailsCard from '../GlobalComponents/DetailsCards'
import { useNavigation } from '@react-navigation/native';


interface ItemProps {
    title: string
    link_text?: string
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
                
                    if(detail_type === "DrillDetails") {
                        navigation.navigate("Drill")
                    }
                
                    
                }} 
            >
                <View
                    style={{
                        marginRight: 0,
                        marginTop: 22,
                        backgroundColor: 'white'
                    }}
                >
                
                    <FullCard
                        title={props.item.title}
                        link_text={props.item.link_text}
                        
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
        if(image_type === "XXLargeImage") return 327

    }

    return (
        <View style={{ 
            flex: 1, 
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
            />
         </View>
    );
};

export default FullCardCarousel;