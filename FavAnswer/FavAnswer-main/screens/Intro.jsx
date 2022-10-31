import React from 'react'
import { StyleSheet, View } from 'react-native';
import IntroCarousel from '../components/Intro/IntroCarousel';



const Intro = ({navigation}) => {
    return (
        <View style={styles.container}>
            <IntroCarousel navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Intro