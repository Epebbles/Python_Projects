import React from 'react'
import { Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './screens/Intro';
import Home from './screens/Home';
import Register from './screens/Register';
import BottomNav from './components/BottomNav';
import TodaysLeaderboard from './components/Leaderboard/TodaysLeaderboard';
import HowToPlay from './components/Learn/HowToPlay';
import AboutUs from './components/Learn/AboutUs';
import TermsConditions from './components/Learn/TermsConditions';
import PrivacyPolicy from './components/Learn/PrivacyPolicy';
import SuggestionsFeedback from './components/Learn/SuggestionsFeedback';

const Stack = createNativeStackNavigator();

const App = () => {

  const today = new Date();

  const options = {
    'year':'numeric',
    'month' : 'short',
    'day' : 'numeric'
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Intro" 
          component={Intro} 
          options={({navigation})=> ({ 
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitle: '',
            headerLeft: () => (<Button title='Skip' onPress={()=> navigation.navigate('Home')}/>)
        })}/>

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown: false}}/>
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTitle: 'Create Your Profile',
            headerRight: () => (<Button title='Done' onPress={() => navigation.navigate('BottomNav')}/>)
          })}
        />
        <Stack.Screen 
          name="Today" 
          component={TodaysLeaderboard} 
          options={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTitle: `${today.toLocaleString('en-US', options)}`
          }}
        />
        <Stack.Screen
          name="How to Play"
          component={HowToPlay}
          options={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerShadowVisible: false,
            headerTitle: () => (<Image style={styles.image}  source={require('./assets/FavAnswerLogoTwo.png')}/>)
          }}
        />
        <Stack.Screen
          name="About Us"
          component={AboutUs}
          options={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerShadowVisible: false,
            headerTitle: () => (<Image style={styles.image}  source={require('./assets/FavAnswerLogoTwo.png')}/>)
          }}
        />
        <Stack.Screen
          name="Terms & Conditions"
          component={TermsConditions}
          options={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerShadowVisible: false,
            headerTitle: () => (<Image style={styles.image}  source={require('./assets/FavAnswerLogoTwo.png')}/>)
          }}
        />
        <Stack.Screen
          name="Privacy Policy"
          component={PrivacyPolicy}
          options={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerShadowVisible: false,
            headerTitle: () => (<Image style={styles.image}  source={require('./assets/FavAnswerLogoTwo.png')}/>)
          }}
        />
        <Stack.Screen
          name="Suggestions & Feedback"
          component={SuggestionsFeedback}
          options={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerShadowVisible: false,
            headerTitle: () => (<Image style={styles.image}  source={require('./assets/FavAnswerLogoTwo.png')}/>)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  image : {
    width: 180,
    height: 40,
    marginBottom: 10
  }
})