import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AnswerButton from '../components/Vote/AnswerButton';
import VoteButton from '../components/Vote/VoteButton';
import NoVotes from '../components/Vote/NoVotes';
import ReportAnswer from '../components/Vote/ReportAnswer';
import Status from '../components/Status';
import DummyListOne from '../components/Vote/DummyData/DummyListOne';
import DummyListTwo from '../components/Vote/DummyData/DummyListTwo';




const Vote = ({navigation}) => {
    const [totalVotes, setTotalVotes] = useState(0);
    const TotalVotes = 10;
    const [todaysQuestion, setTodaysQuestion] = useState(DummyListTwo.question);
    const [todaysAnswers, setTodaysAnswers] = useState(DummyListTwo.answers);
    const [answerSelected, setAnswerSelected] = useState({answerId : 0, answer : {_id : 0, text : "None selected yet"}});
    const [leftAnswer, setLeftAnswer] = useState({_id : 0, text : "loading..."});
    const [rightAnswer, setRightAnswer] = useState({_id : 0, text : "loading..."});
    const [borderOne, setBorderOne] = useState(false);
    const [borderTwo, setBorderTwo] = useState(false);
    const [selected, setSelected] = useState(false);
    const [noVotes, setNoVotes] = useState(false);
    const [visible, setVisible] = useState(false);



    useEffect(() => {
        // setTodaysQuestion(DummyList.question);
        // setTodaysAnswers(DummyList.answers);
        handleAnswers();
    },[])

    const handleAnswers = () => {
        let newAnswers = [];
        for(let i=0; i<2; i++){
            let rand = Math.floor(Math.random() * todaysAnswers.length)
            if(i === 1 && newAnswer[0] === todaysAnswers[rand]){
                if(rand === todaysAnswers.length - 1){
                    rand = 0;
                }
                else{
                    rand += 1;
                }
            }
            newAnswers.push(todaysAnswers[rand]);
        }
        setLeftAnswer(newAnswers[0]);
        setRightAnswer(newAnswers[1]);
    }

    const newAnswer = () => {
        let newList = todaysAnswers.filter((item) =>  item._id !== answerSelected.answer._id)
        if(newList.length === 1){
            reset() + setTotalVotes(10) + setNoVotes(true);
        }
        else{
            let rand = Math.floor(Math.random() * newList.length)
            if(answerSelected.answerId === 1){
                if(newList[rand] === rightAnswer){
                    if(rand === todaysAnswers.length - 1){
                        rand = 0;
                    }
                    else{
                        rand++;
                    }
                }
                setLeftAnswer(newList[rand]);
            }
            if(answerSelected.answerId === 2){
                if(newList[rand] === leftAnswer){
                    if(rand === todaysAnswers.length - 1){
                        rand = 0;
                    }
                    else{
                        rand++;
                    }
                }
                setRightAnswer(newList[rand]);
            }
            setTodaysAnswers(newList);
        }
    }

    const handleVote = () => {
        totalVotes < TotalVotes?
            setTotalVotes(totalVotes+1) + reset() + newAnswer():
            setNoVotes(true)
    }

    const handleSelection = (answerId, answer) => {
        totalVotes === TotalVotes?
            handleVote():
        answerId === 1?
            setBorderOne(true) + setBorderTwo(false) + setSelected(true) + setAnswerSelected({answerId, answer: leftAnswer})
        :answerId === 2?
            setBorderTwo(true) + setBorderOne(false) + setSelected(true) + setAnswerSelected({answerId, answer: rightAnswer}): ""
    }

    const reset = () => {
        setSelected(false) + setBorderOne(false) + setBorderTwo(false)
    }

    const handleReport = (answer, reason) => {
        reset()
        setVisible(false)
        answer.answer === leftAnswer.text?
            alert(`Left Answer: This answer was reported: ${answer.answer} with this reason: ${reason.reason}`) + setAnswerSelected({answerId: 1, answer: leftAnswer}) + newAnswer():
        answer.answer === rightAnswer.text?
            alert(`Right Answer: This answer was reported: ${answer.answer} with this reason: ${reason.reason}`) + setAnswerSelected({answerId: 2, answer: rightAnswer}) + newAnswer():
            alert('Something incredibly wierd just happened')
    }

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>{todaysQuestion}.</Text>
            </View>
            <View style={styles.answer}>
                <AnswerButton style={styles.button} answer={leftAnswer} select={handleSelection} clicked={borderOne} answerId={1} unSelect={reset} />
                <AnswerButton style={styles.button} answer={rightAnswer} select={handleSelection} clicked={borderTwo} answerId={2} unSelect={reset} />
            </View>
            <View style={styles.vote}>
                <View style={styles.voteButton}>
                    <VoteButton vote={handleVote} access={selected}/>
                </View>
                <View style={styles.progress}>
                    <StatusBar hidden />
                    <Status height={10} backColor="#f3f2f3" statusColor="#54cb2b" current={totalVotes} total={TotalVotes}/>
                    <Text style={styles.text}>
                        {TotalVotes-totalVotes}/10 votes remaining today
                    </Text>
                </View>
                <View style={styles.report}>
                    <TouchableOpacity activeOpacity={totalVotes < 10? 0.4: 1} onPress={totalVotes < 10? () => setVisible(true): null}>
                        <Text style={[styles.reportText, {color: totalVotes === 10? 'gray': '#0d90fc'}]}>Offensive Answer?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <NoVotes visible={noVotes} cancel={() => setNoVotes(false)} navigation={navigation}/>
            <ReportAnswer visible={visible} cancel={() => setVisible(false)} answers={[leftAnswer.text, rightAnswer.text]} report={handleReport}/>
        </View>
    )
}

export default Vote;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
    },
    questionContainer : {
        flex: 0.5,
        marginTop: 18,
        paddingLeft: 10,
        paddingRight: 10
    },
    question : {
        textAlign: 'center',
        fontSize: 33,
    },
    answer : {
        flex: 2,
        flexDirection: 'row',
        padding: 15
    },
    button : {
        flex: 1
    },
    vote : {
        flex: 1,
    },
    voteButton : {
        alignItems: 'center',
        marginTop: 10
    },
    progress : {
        paddingTop: 20,
        paddingRight: 35,
        paddingLeft: 35,
        justifyContent: 'center'
    },
    text : {
        textAlign: 'center', 
        marginTop: 10, 
        color: 'gray', 
        fontSize: 12
    },
    report : {
        paddingTop: 7
    },
    reportText : {
        textAlign: 'center',
    }
})