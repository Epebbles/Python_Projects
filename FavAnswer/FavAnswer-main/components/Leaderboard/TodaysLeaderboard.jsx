import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Status from '../Status';
import VoteOrPlayButton from './VoteOrPlayButton';
import TodaysLeaders from './DummyData/TodaysLeaders';
import CurrentLeader from './CurrentLeader';
import MyAnswer from './MyAnswer';

const TodaysLeaderboard = ({navigation}) => {
    const [totalTime, setTotalTime] = useState(100)
    const [timeUsed, setTimeUsed] = useState(80)
    const [color, setColor] = useState()
    const [answerExists, setAnswerExists] = useState(true)

    useEffect(() => {
        const current = timeUsed/totalTime
        current <= 0.80?
            setColor("#54cb2b"):
        current > 0.80 && current <= 0.90?
            setColor("#eed202"):
            setColor("#ff0f0f")
    }, [timeUsed])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.hTop}>
                    <View style={[styles.dot, {backgroundColor: color}]}/>
                    <Text style={[styles.running, {color: color}]}>Running now</Text>
                </View>
                <View style={styles.hBottom}>
                    <View style={styles.status}>
                        <StatusBar hidden/>
                        <Status height={5} backColor="#f3f2f3" statusColor={color} current={timeUsed} total={totalTime}/>
                    </View>
                    <View style={styles.timeLeft}>
                        <Text style={styles.timeLeftText}>2 hrs 15 min left</Text>
                    </View>
                </View>
            </View>
            <View style={styles.qod}>
                <Text style={styles.question}>What is your fav holiday?</Text>
            </View>
            <View style={styles.myAnswer}>
                {answerExists?
                    <MyAnswer />:
                    <>
                        <View style={styles.alternative}>
                            <Text style={styles.choice}>You arent participating in todays game, click play to participate in the next!</Text>
                        </View>
                        <View style={styles.button}>
                            <VoteOrPlayButton type='Play' navigation={navigation} />
                        </View>
                    </>
                }
            </View>
            <View style={styles.leaderTitle}>
                <Text style={styles.leaderBoardText}>Top 20</Text>
            </View>
            <View style={styles.hr}/>
            <ScrollView style={styles.leaders}>
                {TodaysLeaders.map((leader, i) => {
                    return (
                        <View key={i}>
                            <CurrentLeader place={i+1} name={leader.name} image={leader.image} answer={leader.answer} votes={leader.votes}/>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TodaysLeaderboard

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
    },
    hr : {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    header : {
        flex: 0.08,
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25
    },
    hTop : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot : {
        height: 7,
        width: 7,
        borderRadius: '50%',
        marginRight: 6
    },
    hBottom : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    status : {
        flex: 2
    },
    timeLeft : {
        flex: 1
    },
    timeLeftText : {
        marginLeft: 10
    },
    qod : {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 25
    },
    question : {
        fontSize: 24,
        fontWeight: '500'
    },
    myAnswer : {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alternative : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    choice : {

    },
    button : {
        flex: 1,
        width: '60%',
        justifyContent: 'center'
    },
    leaderTitle : {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leaderBoardText : {

    },
    leaders : {
        flex: 0.5
    }
})