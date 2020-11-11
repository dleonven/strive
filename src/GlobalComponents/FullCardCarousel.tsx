import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";

import Carousel from "react-native-snap-carousel";
import {image_type, detail_type} from '../GlobalTypes'


import { FullCard } from '../GlobalComponents/FullCard'
import Imagee from '../GlobalComponents/Images'
import DetailsCard from '../GlobalComponents/DetailsCards'


interface ItemProps {
    title: string
    link_text: string
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
    detail_type: detail_type
    input: ItemProps[]
}


const FullCardCarousel = (props: FullCardCarouselProps) => {
    
    const { image_type, detail_type } = props
    
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [carouselItems, setCarouselItems] = useState<ItemProps[]>(props.input);
    const ref = useRef(null);
    
    //const renderItem = useCallback(({ item, index }: RenderItemProps) => {
    const renderItem = useCallback( (props: {item: ItemProps, index: number}) => {
        

        return (
            <View
                style={{
                    //height: 369,
                    //width: '90%',
                    //marginLeft: 24,
                    marginRight: 0,
                    marginTop: 22,
                    backgroundColor: 'white'
                }}
            >
            
                <FullCard
                    title={props.item.title}
                    link_text={props.item.link_text}
                    
                    ImageComponent={
                        <Imagee
                            image_type={image_type}
                            uri={props.item.uri}
                        />
                    }

                    DetailComponent={    
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
                    }
                />              
            </View>
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
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
                    sliderWidth={80}
                    itemWidth={280}
                    renderItem={renderItem}
                    onSnapToItem={(index: number) => setActiveIndex(index)}
                />
            </View>
        </SafeAreaView>
    );
};

export default FullCardCarousel;