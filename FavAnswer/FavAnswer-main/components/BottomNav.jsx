import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Vote from '../screens/Vote';
import Learn from '../screens/Learn';
import Profile from '../screens/Profile';
import Leaderboard from '../screens/Leaderboard';
import Play from '../screens/Play';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            initialRouteName='Vote'
            screenOptions={{
                tabBarActiveTintColor: "#f36b26",
                tabBarStyle: {
                    paddingLeft: 10,
                    paddingRight: 10
                },
                headerTitle: () => (<Image style={styles.image}  source={require('../assets/FavAnswerLogoTwo.png')}/>),
                headerShadowVisible: false
            }}
        >
            <Tab.Screen 
                name="Vote" 
                component={Vote} 
                options={{
                    tabBarIcon: (({color, size}) => <MaterialIcons name="lightbulb" color={color} size={size}/>),
                }}
            />
            <Tab.Screen 
                name="Play" 
                component={Play} 
                options={{
                    tabBarIcon: (({color, size}) => <FontAwesome5 name="dollar-sign" color={color} size={23}/>),
                }}
            />
            <Tab.Screen 
                name="Leaderboard" 
                component={Leaderboard} 
                options={{
                    tabBarIcon: (({color, size}) => <MaterialIcons name="leaderboard" color={color} size={size}/>),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: (({color, size}) => <MaterialIcons name="person" color={color} size={size}/>),
                }}
            />
            <Tab.Screen 
                name="Learn" 
                component={Learn} 
                options={{
                    tabBarIcon: (({color, size}) => <MaterialIcons name="menu-book" color={color} size={size}/>),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    image : {
        width: 180,
        height: 40,
        marginBottom: 10
    }
})