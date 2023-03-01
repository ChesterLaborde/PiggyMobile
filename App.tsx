import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import DonationsScreen from './screens/DonationsScreen';
import HomeScreen from './screens/HomeScreen';
import QrScreen from './screens/QrScreen';
import TrendingScreen from './screens/TrendingScreen';
import WalletScreen from './screens/WalletScreen';

import auth from '@react-native-firebase/auth';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PiggyScreen from './screens/PiggyScreen';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DonateScreen from './screens/DonateScreen';
import ThankYouScreen from './screens/ThankYouScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const DonationFlow = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='QRScreen' component={QrScreen} />
      <Stack.Screen name='Piggy' component={PiggyScreen} />
      <Stack.Screen name='Donate' component={DonateScreen} />
      <Stack.Screen name='ThankYou' component={ThankYouScreen} />
    </Stack.Navigator>
  )
}

const AnonContainer = ({ setLoggedUser }) =>{

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: '1017155111651-lpr9dgj3q5dirqmooei8921k8kigp39u.apps.googleusercontent.com'
    })
  }, []);

  const onPress = async () => {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCredential).then(async data => {
      console.log(data);
      const token = await data.user.getIdToken();
      console.log(token);
      const body = {
        email: data.user.email,
        display_name: data.user.displayName
      }
      const res = await axios.post('https://piggy-api-4fsvtl2whq-uc.a.run.app/users', body, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      await AsyncStorage.setItem('@token', token);
      setLoggedUser(true);
      console.log(res.data);
    }).catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GoogleSigninButton 
        onPress={onPress}
        style={{ width: 192, height: 48 }}
      />
    </SafeAreaView>
  )
}


const App = () => {

  const [loggedUser, setLoggedUser] = useState<boolean>();

  useEffect(() => {
    AsyncStorage.getItem('@token').then(res => {
      setLoggedUser(true);
    }).catch(err => console.log(err));
  }, [])

  if (!loggedUser) {
    return <AnonContainer setLoggedUser={setLoggedUser}/>
  }

  return (
    <StripeProvider 
      publishableKey='pk_test_NcvZfGrfz03QycZSsImW6LcX00nnOwkBWM' 
      urlScheme='example.com' 
      merchantIdentifier='merchant.com.piggybank'
      >
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarStyle: styles.tabBar }} >
          <Tab.Screen name='Piggys' component={HomeScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <Text style={[styles.text, focused ? { fontWeight: 'bold'} : null]}>Piggys</Text>
              </View>
            )
          }} />
          <Tab.Screen name='Donations' component={DonateScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <Text style={[styles.text, focused ? { fontWeight: 'bold'} : null]}>Donations</Text>
              </View>
            )
          }} />
          <Tab.Screen name='QR' component={DonationFlow} options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.circle}>
                <Text>+</Text>
              </View>
            )
          }} />
          <Tab.Screen name='Trending' component={TrendingScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <Text style={[styles.text, focused ? { fontWeight: 'bold'} : null]}>Trending</Text>
              </View>
            )
          }} />
          <Tab.Screen name='Wallet' component={WalletScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <Text style={[styles.text, focused ? { fontWeight: 'bold'} : null]}>Wallet</Text>
              </View>
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </StripeProvider>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#362F2E',
    margin: 25,
    position: 'absolute',
    height: 60,
    borderRadius: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  item: {
    justifyContent: 'center', 
    alignItems: 'center', 
    top: 15,
    flex: 1
  },
  text: {
    color: '#fff'
  },
  circle: {
    justifyContent: 'center', 
    alignItems: 'center', 
    top: -15, 
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    backgroundColor: '#FFDAD7',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  }
})

export default App;
