import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
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
        <Tab.Screen name='Piggys' component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Text style={styles.text}>Piggys</Text>
            </View>
          )
        }} />
        <Tab.Screen name='Donations' component={DonationsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Text style={styles.text}>Donations</Text>
            </View>
          )
        }} />
        <Tab.Screen name='QR' component={QrScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.circle}>
              <Text>+</Text>
            </View>
          )
        }} />
        <Tab.Screen name='Trending' component={TrendingScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Text style={styles.text}>Trending</Text>
            </View>
          )
        }} />
        <Tab.Screen name='Wallet' component={WalletScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Text style={styles.text}>Wallet</Text>
            </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
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
