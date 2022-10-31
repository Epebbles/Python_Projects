import { StyleSheet, View } from 'react-native'
import React from 'react'
import RegisterForm from '../components/RegisterOrProfile/RegisterForm'

const Register = () => {

    return (
        <View style={styles.container}>
            <RegisterForm type="New" initialProfilePic="" initialFName="" initialLName="" initialEmail="" initialZipCode="" initialGender="" initialAge="" initialMaritalStatus="" initialEducation="" initialFavAnimal="" initialFavFood="" initialCharity=""/>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})