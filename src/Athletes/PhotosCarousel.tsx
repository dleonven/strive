import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";

import Carousel from "react-native-snap-carousel";

/*interface ItemProps {
    title: string;
    text: string;
}*/

interface ItemProps {
    title: string;
    subtitle: string;
    uri: string
}

interface CustomCarouselProps {}

interface RenderItemProps {
    item: ItemProps;
    index: number;
}


const sports = [
  {
    title: 'Basketball',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    uri: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Tennis',
    subtitle: 'Lorem ipsum dolor sit amet',
    uri: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'Football',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    uri: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Golf',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    uri: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'Swimming',
    subtitle: 'Lorem ipsum dolor sit amet',
    uri: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];


const PhotosCarousel: React.SFC<CustomCarouselProps> = () => {
    
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [carouselItems, setCarouselItems] = useState<ItemProps[]>(sports);
    const ref = useRef(null);
    
    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (
            <View
                style={{
                    //borderRadius: 12,
                    height: 369,
                    width: '90%',
                    //padding: 50,
                    marginLeft: 24,
                    marginRight: 0,
                    marginTop: 22,
                    backgroundColor: 'white'
                }}
            >
                <Image
                    source={{uri: item.uri}}
                    style={{ height: '100%', width: '100%', borderRadius: 12 }}
                />
                <View style={{ position: 'absolute', left: 32, bottom: 32 }}>
                    <Text style={{ fontSize: 23, color: 'white' }}>{item.title}</Text>
                    <Text style={{ fontSize: 14, color: 'white' }}>{item.subtitle}</Text>
                </View>

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

export default PhotosCarousel;