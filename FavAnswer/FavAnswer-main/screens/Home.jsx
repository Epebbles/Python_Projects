import { View, StyleSheet, Image, useWindowDimensions, Button, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RegisterButton from '../components/Home/RegisterButton'
import EmailRegister from '../components/Home/EmailRegister';

const Home = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    
    const {width} = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/FavAnswerLogo.png')} style={[styles.image, {width, resizeMode: 'contain'}]}/>
            </View>
            <View style={styles.buttons}>
                <RegisterButton image={require('../assets/Home/Google.png')} text="Google" bColor="white" tColor="black" />
            </View>
            <View style={styles.buttons}>
                <RegisterButton image={require('../assets/Home/Facebook.png')} text="Facebook" bColor="#4267B2" tColor="white" />
            </View>
            <View style={styles.buttons}>
                <RegisterButton image={require('../assets/Home/TikTok.png')} text="TikTok" bColor="black" tColor="white" />
            </View>
            <View style={[styles.buttons, styles.emailButton]}>
                <RegisterButton image={require('../assets/Home/Email.png')} text="Email" bColor="#eeeeee" tColor="black" selected={() => setVisible(true)}/>
            </View>
            <View style={styles.details}>
                <View style={styles.signIn}>
                    <Text style={styles.signInText}>Already have an account?</Text>
                    <Button title='Sign In'/>
                </View>
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.disclaimer}>By signing up, you agree to our</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <TouchableOpacity 
                            activeOpacity={0.4} 
                            onPress={() => navigation.navigate('Terms & Conditions')}
                        >
                            <Text style={[styles.link, styles.disclaimer]}>Terms & Conditions</Text>
                        </TouchableOpacity> 
                        <Text style={styles.disclaimer}> and </Text>
                        <TouchableOpacity 
                            activeOpacity={0.4} 
                            onPress={() => navigation.navigate('Privacy Policy')}
                        >
                            <Text style={[styles.link, styles.disclaimer]}>Privacy Policy</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
            <EmailRegister visible={visible} disappear={() => setVisible(false)} navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30
    },
    imageContainer : {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image : {
        flex: 0.6,
        justifyContent: 'center'
    },
    buttons : {
        flex: 0.1,
        alignSelf: 'stretch',
        marginBottom: 10
    },
    emailButton: {
        marginTop: 25
    },
    details : {
        flex: 0.2,
        justifyContent: 'center',
    },
    signIn : {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 25
    },
    signInText : {
        fontSize: 18
    },
    textContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    disclaimer : {
        fontSize: 16,
    },
    linkContainer: {
    },
    link : {
        color: '#0d90fc'
    }
})

export default Home