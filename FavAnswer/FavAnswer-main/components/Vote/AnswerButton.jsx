import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

const AnswerButton = ({answer, select, unSelect, clicked, answerId}) => {
    const [border, setBorder] = useState(false);
    const [answerItem, setAnswerItem] = useState()

    useEffect(()=> {
        setAnswerItem(answer)
        setBorder(clicked)
    }, [answer, clicked])

    const handleSelect = () => {
        border?
            unSelect():
            select(answerId, answer)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.appButtonContainer,
                    {borderWidth: border? 2:0}
                ]}
                onPress={handleSelect}
            >
                <Text 
                    numberOfLines={11}
                    style={styles.appButtonText}
                >
                    {answerItem? answerItem.text: "loading..."}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AnswerButton

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        padding: 8
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#f3f9ff",
        borderColor: "#0d90fc",
        borderRadius: 30,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        padding: 20
    },
    appButtonText: {
        fontSize: 25,
        color: "black",
        alignSelf: "center",
        fontWeight: '500',
        textAlign: 'center'
    }
})