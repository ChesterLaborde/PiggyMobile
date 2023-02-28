import React from 'react';
import { StyleSheet } from 'react-native'
import DonationsScreen from './screens/DonationsScreen';
import HomeScreen from './screens/HomeScreen';
import QrScreen from './screens/QrScreen';
import TrendingScreen from './screens/TrendingScreen';
import WalletScreen from './screens/WalletScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarStyle: styles.tabBar }} >
        <Tab.Screen name='Piggys' component={HomeScreen} />
        <Tab.Screen name='Donations' component={DonationsScreen} />
        <Tab.Screen name='QR' component={QrScreen} />
        <Tab.Screen name='Trending' component={TrendingScreen} />
        <Tab.Screen name='Wallet' component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    margin: 25,
    position: 'absolute',
    height: 60,
    borderRadius: 20,
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
  }
})

export default App;
