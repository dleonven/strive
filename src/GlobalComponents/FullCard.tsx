import React from "react";

import { View } from "react-native";


interface FullCardProps {
    ImageComponent?: React.ReactNode
    DetailComponent?: React.ReactNode
}

export const FullCard = (props: FullCardProps) => {
    return(
        <View>
            {props.ImageComponent}
            {props.DetailComponent}
        </View>
    )
}

