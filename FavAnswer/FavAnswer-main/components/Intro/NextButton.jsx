import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from 'react'

const NextButton = ({title, scrollTo}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={scrollTo}
                style={styles.appButtonContainer}
            >
                <Text style={styles.appButtonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NextButton

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#0d6efd",
        borderRadius: 14,
        paddingVertical: 20,
        paddingHorizontal: 12,
        marginBottom: 40
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        alignSelf: "center",
    }
})