import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'



const SlideItem = ({item}) => {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
            <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default SlideItem

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image : {
        flex: 0.7,
        justifyContent: 'center',
        marginTop: 60
    },
    details:{
        flex: 0.1,
        marginTop: 50
    },
    title : {
        fontWeight: '700',
        fontSize: 28,
        marginBottom: 10,
        color: 'black',
        textAlign: 'center'
    },
    description : {
        fontWeight: '300',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})