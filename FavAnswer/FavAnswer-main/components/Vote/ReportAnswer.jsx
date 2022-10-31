import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import SegmentedPicker from 'react-native-segmented-picker';
import ReportReasonList from './OptionLists/ReportReasonList';

const ReportAnswer = ({visible, answers, cancel, report}) => {
    const [answersToReport, setAnswersToReport] = useState(['loading...', 'loading...']);
    const [answerSelected, setAnswerSelected] = useState("");
    const [reason, setReason] = useState("");
    const [isVisible, setIsVisible] = useState();
    const [answerVisible, setAnswerVisible] = useState(false);
    const [listVisible, setListVisible] = useState(false);

    const answerRef = useRef(null);
    const reasonRef = useRef(null);

    useEffect(() => {
        setAnswersToReport(answers)
        setIsVisible(visible)
    }, [answers, visible])

    const handleCancel = () => {
        setAnswerSelected("")
        setReason("")
        cancel()
    }

    const handleReport = () => {
        report(answerSelected, reason)
        setAnswerSelected("")
        setReason("")
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={handleCancel}
        >
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.back}>
                            <TouchableOpacity activeOpacity={0.4} onPress={handleCancel}>
                                <Text style={styles.backButton}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>Offensive Answer</Text>
                        <View style={styles.space}/>
                    </View>
                    <View style={styles.hr}/>
                    <View style={styles.row}>
                        <Text style={styles.label}>Answer*</Text>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => setAnswerVisible(true)}>
                            {answerSelected === ""?
                                <Text style={[styles.input, styles.reason, styles.placeholder]}>Select</Text>:
                                <Text style={[styles.input, styles.answer]}>{answerSelected.answer}</Text>
                            }
                        </TouchableOpacity>
                        <SegmentedPicker 
                            size={0.35}
                            ref={answerRef}
                            visible={answerVisible}
                            onConfirm={(e) => setAnswerSelected(e) + setAnswerVisible(false)}
                            options={[
                                {
                                    key: 'answer',
                                    items: [
                                        {label: `${answersToReport[0]}`, value: `${answersToReport[0]}`},
                                        {label: `${answersToReport[1]}`, value: `${answersToReport[1]}`}
                                    ]
                                }
                            ]}
                        />
                    </View>
                    <View style={styles.hrI}/>
                    <View style={styles.row}>
                        <Text style={styles.label}>Reason*</Text>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => setListVisible(true)}>
                            {reason === ""?
                                <Text style={[styles.input, styles.reason, styles.placeholder]}>Select</Text>:
                                <Text style={[styles.input, styles.reason]}>{reason.reason}</Text>
                            }
                        </TouchableOpacity>
                        <SegmentedPicker 
                            size={0.35}
                            ref={reasonRef}
                            visible={listVisible}
                            onConfirm={(e) => setReason(e) + setListVisible(false)}
                            options={ReportReasonList}
                        />
                    </View>
                    <View style={styles.hr}/>
                    <View style={styles.footer}>
                        <View style={styles.space}>
                            <TouchableOpacity activeOpacity={0.4} onPress={handleReport}>
                                <Text style={styles.reportButton}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ReportAnswer

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '10%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    view: {
        margin: 20,
        width: '90%',
        minHeight: '20.5%',
        maxHeight: 300,
        backgroundColor: "white",
        borderRadius: 7,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    hr : {
        width: '100%',
        borderBottomColor: 'black', 
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hrI: {
        width: '80%',
        borderBottomColor: 'black', 
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    header : {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25
    },
    back : {
        flex: 1,
    },
    backButton : {
        fontSize: 18,
        color: '#0d90fc'
    },
    title : {
        justifyContent: 'center',
        textAlign: 'center',
        flex: 2,
        fontSize: 18,
        fontWeight: '500'
    },
    space : {
        flex: 1
    },
    reporting : {
        marginTop: 10,
        width: '100%'
    },
    question: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    answerContainer : {
        alignItems: 'center',
    },
    answer : {
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 15
    },
    row : {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 11,
        width: '70%'
    },
    label : {
        textAlign: 'left',
        fontSize: 18,
        marginRight: 20
    },
    input : {
        fontSize: 18,
        textAlign: 'left'
    },
    answer : {
        marginLeft: 20,
        width: '60%'
    },
    reason : {
        marginLeft: 20
    },
    placeholder : {
        color: '#c7c7c7'
    },
    footer : {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    reportButton : {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#0d90fc'
    }
})