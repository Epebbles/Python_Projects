import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutUs = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>About Us</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailHeader}>What is Lorem Ipsum?</Text>
                <Text style={styles.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis dolore delectus dicta rerum excepturi sapiente, velit nemo. Dicta quam et sint ratione ab suscipit rerum doloremque, totam deserunt facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at! Perferendis est eius distinctio molestias, quidem ab asperiores vel veniam nisi dolores quod. Nam error ullam eveniet eos magnam natus.</Text>
                <View  style={styles.space}/>
                <Text style={styles.detailHeader}>What is Lorem Ipsum?</Text>
                <Text style={styles.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis dolore delectus dicta rerum excepturi sapiente, velit nemo. Dicta quam et sint ratione ab suscipit rerum doloremque, totam deserunt facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at! Perferendis est eius distinctio molestias, quidem ab asperiores vel veniam nisi dolores quod. Nam error ullam eveniet eos magnam natus.</Text>
                <Text style={styles.detail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis dolore delectus dicta rerum excepturi sapiente, velit nemo. Dicta quam et sint ratione ab suscipit rerum doloremque, totam deserunt facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at! Perferendis est eius distinctio molestias, quidem ab asperiores vel veniam nisi dolores quod. Nam error ullam eveniet eos magnam natus.</Text>
            </View>
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 25,
        paddingRight: 25
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
    details : {
        flex: 0.9
    },
    space: {
        height: 15
    },
    detailHeader : {
        fontSize: 20,
        fontWeight: '500'
    },
    detail : {
        marginTop: 10
    },
})