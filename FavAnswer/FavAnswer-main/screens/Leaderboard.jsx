import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import VoteOrPlayButton from '../components/Leaderboard/VoteOrPlayButton';
import ArrowButton from '../components/Leaderboard/ArrowButton';
import TodaysQuestion from '../components/Leaderboard/TodaysQuestion';
import WinnersList from '../components/Leaderboard/DummyData/WinnersList';
import Winner from '../components/Leaderboard/Winner';

const Leaderboard = ({navigation}) => {
    const [winners, setWinners] = useState(WinnersList);
    const [date, setDate] = useState(0);

    const options = {
        month: 'long',
        year: 'numeric'
    }

    const handleWinningList = (direction) => {
        direction === -1?
            date === 0?
                null: setDate(date-1):
        direction === +1?
            date === WinnersList.length-1?
                null: setDate(date+1)
        :null
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Leaderboard</Text>
            </View>
            <View style={styles.today}>
                <TodaysQuestion navigation={navigation}/>
            </View>
            <View style={styles.dateSelection}>
                <View style={styles.arrowButton}>
                    <ArrowButton icon="keyboard-arrow-left" selected={() => handleWinningList(-1)}/>
                </View>
                <Text style={styles.date}>{winners[date].date.toLocaleString('en-US', options)}</Text>
                <View style={styles.arrowButton}>
                    <ArrowButton icon="keyboard-arrow-right" selected={() => handleWinningList(+1)}/>
                </View>
            </View>
            <ScrollView style={styles.winners}>
                {winners[date].winners.map((winner, i) => {
                    return (
                        <View key={i}>
                            <Winner name={winner.name} question={winner.question} answer={winner.answer} image={winner.image} votes={winner.votes} date={winner.date}/>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Leaderboard

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white'
    },
    header : {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hr : {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    title : {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500',
        marginTop: 11
    },
    today : {
        flex: 0.7,
        marginTop: 10,
        marginBottom: 10
    },
    statement : {
        flex: 0.15,
        justifyContent: 'center'
    },
    statementText : {
        textAlign: 'center'
    },
    dateSelection : {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    arrowButton : {
        flex: 1.6
    },
    date : {
        flex: 2,
        fontSize: 18,
        textAlign: 'center'
    },
    winners : {
        flex: 0.4,
        borderTopWidth: StyleSheet.hairlineWidth
    },
})