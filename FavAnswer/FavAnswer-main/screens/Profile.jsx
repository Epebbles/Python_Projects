import { StyleSheet, View } from 'react-native'
import React from 'react'
import RegisterForm from '../components/RegisterOrProfile/RegisterForm'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <RegisterForm initialProfilePic="" initialFName="" initialLName="" initialEmail="" initialZipCode="" initialGender="" initialAge="" initialMaritalStatus="" initialEducation="" initialFavAnimal="" initialFavFood="" initialCharity=""/>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    profile: {
        flex: 1,
        width: '100%'
    }
})
