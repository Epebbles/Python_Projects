import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RegisterButton = ({image, text, bColor, tColor, selected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={selected}
                style={[
                    styles.appButtonContainer, 
                    {backgroundColor : bColor,
                    borderWidth: bColor !== 'white' && text !== 'Email'? 0:text === 'Email'? 1 : 1}
                ]}
            >
                <Image 
                    source={image} 
                    style={
                        text === 'Email'? 
                            styles.emailImage:
                        text === 'TikTok'? 
                            styles.tiktokImage: 
                        styles.image
                    }/>
                <Text 
                    style={[
                        styles.appButtonText,
                        {color : tColor}
                    ]}
                    >
                        {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterButton

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
    },
    appButtonContainer: {
        elevation: 8,
        borderRadius: 14,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image : {
        height: 30,
        width: 30,
        marginRight: 10
    },
    tiktokImage : {
        height: 35,
        width: 30,
        marginRight: 10
    },
    emailImage: {
        height: 30,
        width: 43,
        marginRight: 10
    },
    appButtonText: {
        fontSize: 22,
        alignSelf: "center",
        fontWeight: "bold"
    }
})