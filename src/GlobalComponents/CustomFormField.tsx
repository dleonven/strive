import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';




interface FormFieldProps {
    field_state?: 'empty' | 'focus' | 'completed' | 'error' | 'validated'
    text?: string
}


/* RECIEVES THE FIELD STATE, AND DISPLAYS THE STYLES ACCORDINGLY */
const CustomFormField = (props: FormFieldProps) => {
    
    type FieldState = 'empty' | 'focus' | 'completed' | 'error' | 'validated'
    
    type styleType = {
        lineStyle: object
        title: object,
        placeholderTextColor?: { color: string }
    }
    
    const [field_state, setFieldState] = useState<FieldState>('validated')
    
    const [text, setText] = useState<string>('')
    
    /* STATE THAT CONTROL WHICH STYLE TO DISPLAY */
    const [style, setStyle] = useState<styleType>(styles_empty)
    
    const handleChangeText = () => {
        if(text === '') setFieldState('empty')
        if(text !== '') setFieldState('completed')
    }
    
    /* STYLE CHANGES DEPENDING ON THE STATE */
    useEffect(() => {
        switch(field_state) {
            case 'empty':
                setStyle(styles_empty)
                break
            case 'focus':
                setStyle(styles_focus)  
                break
            case 'completed':
                setStyle(styles_completed)  
                break
            case 'error':
                setStyle(styles_error)  
                break
            case 'validated':
                setStyle(styles_validated)  
                break                
        }
    }, [field_state])
    
    
    return(
        <View>
            <View>
                <Text style={style.title}>Email</Text>
                <TextInput
                    value={''}
                    onChangeText={value => setText(value)}
                    placeholder={'eg. john@johnboyle.me'}
                    placeholderTextColor={style.placeholderTextColor.color}
                />
            </View>
            <View style={style.lineStyle}></View>
        </View>
    )
}




const styles_empty = StyleSheet.create({
    listItemStyle: {
        marginTop: 16, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'BioSans-Regular',
        fontSize: 16,
        marginBottom: 14
    },
    placeholderTextColor: {
        color: 'rgb(200,199,199)'
    },
    listItemContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemTextsStyle: {
        marginLeft: 16
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(236,235,235)',
        marginTop: 10
    }
});

const styles_focus = StyleSheet.create({
    listItemStyle: {
        marginTop: 16, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'BioSans-SemiBold',
        fontSize: 16,
        marginBottom: 14
    },
    placeholderTextColor: {
        color: 'rgb(200,199,199)'
    },    
    listItemContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemTextsStyle: {
        marginLeft: 16
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(55,54,54)',
        marginTop: 10
    }
});


const styles_completed = StyleSheet.create({
    listItemStyle: {
        marginTop: 16, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'BioSans-SemiBold',
        fontSize: 18,
        marginBottom: 14
    },
    placeholderTextColor: {
        color: 'rgb(55,54,54)'
    },    
    listItemContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemTextsStyle: {
        marginLeft: 16
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(255,255,255)',
        marginTop: 10
    }
});


const styles_error = StyleSheet.create({
    listItemStyle: {
        marginTop: 16, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    title: {
        fontFamily: 'BioSans-Regular',
        fontSize: 16,
        marginBottom: 14
    },
    placeholderTextColor: {
        color: 'rgb(55,54,54)'
    },    
    listItemContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemTextsStyle: {
        marginLeft: 16
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(222,4,4)',
        marginTop: 10
    }
});


const styles_validated = StyleSheet.create({
    listItemStyle: {
        marginTop: 16, 
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'BioSans-Regular',
        fontSize: 16,
        marginBottom: 14
    },
    placeholderTextColor: {
        color: 'rgb(55,54,54)'
    },
    listItemContentStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemTextsStyle: {
        marginLeft: 16
    },
    lineStyle: {
        borderWidth: 1,
        borderColor:'rgb(200,199,199)',
        marginTop: 10
    }
});


export default CustomFormField