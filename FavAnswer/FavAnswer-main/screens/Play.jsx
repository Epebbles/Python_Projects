import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import SubmitButton from '../components/Play/SubmitButton';

const Play = ({navigation}) => {
    const [answer, setAnswer] = useState("")

    const tomorrow = new Date()
    tomorrow.setDate(new Date().getDate() + 1)
    const options = {
        'year':'numeric',
        'month' : 'long',
        'day' : 'numeric'
    }

    const handleSubmit = () => alert('working')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Play the Game</Text>
            </View>
            <View style={styles.directions}>
                <Text style={styles.dTwo}>Show your creativity and a chance to win it all for you and your charity. It costs a dollar for you and your charity to win.</Text>
            </View>
            <View style={styles.question}>
                <View style={styles.dateWrap}>
                    <Text style={styles.date}>{tomorrow.toLocaleDateString('en-US', options)}</Text>
                </View>
                <Text style={styles.qod}>What was the fav day of your life by far?</Text>
            </View>
            <View style={styles.answer}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={3}
                    blurOnSubmit={true}
                    value={answer}
                    onChangeText={(e) => setAnswer(e)}
                    placeholder='Start typing'
                    maxLength={80}
                />
                <View style={styles.hr}/>
                <Text style={styles.text}>Characters remaining {80 - answer.length}/80</Text>
            </View>
            <View style={styles.submit}>
                <SubmitButton submit={handleSubmit}/>
            </View>
            <View style={styles.submitDisclaimer}>
                <Text style={styles.text}>Submitting your FavAnswer also gives you</Text> 
                <Text style={styles.text}>10 additional votes for this game today.</Text>
            </View>
            <View style={styles.policy}>
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Terms & Conditions')}>
                    <Text style={styles.link}>Terms & Conditions </Text>
                </TouchableOpacity>
                <Text style={styles.disclaimer}>and</Text>
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Privacy Policy')}>
                    <Text style={styles.link}> Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Play

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header : {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title : {
        fontSize: 24,
        fontWeight: '500'
    },
    directions : {
        flex: 0.28,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    dTwo : {
        marginTop: 6,
        fontSize: 22,
        paddingLeft: 15,
        paddingRight: 15
    },
    text : {
        textAlign: 'center', 
        color: 'gray', 
        fontSize: 12
    },
    call : {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    dOne : {
        textAlign: 'left',
        fontSize: 22,
        marginTop: 10
    },
    question : {
        flex: 0.15,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    dateWrap : {
        marginTop: 40,
        backgroundColor: '#f36b26',
        borderRadius: 3,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        width: 120,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    date : {
        color: 'white',
        fontSize: 10
    },
    qod : {
        fontSize: 30,
        fontWeight: '600'
    },
    answer : {
        flex: 0.15,
        justifyContent: 'center',
        paddingLeft: 15,
        marginTop: 30,
        marginBottom: 30,
        width: '100%'
    },
    input : {
        fontSize: 20,
        paddingLeft: 15,
        marginTop: 20
    },
    hr : {
        borderBottomColor: 'black', 
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 15,
        marginRight: 30,
        marginBottom: 10
    },
    submitDisclaimer : {
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 50,
        paddingRight: 50
    },
    submit : {
        flex: 0.15,
        marginTop: 15,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        width: '90%'
    },
    policy : {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    disclaimer : {
        fontSize: 16
    },
    link : {
        fontSize: 16,
        color: '#0d90fc'
    }
})