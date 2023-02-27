import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import QrScreen from './screens/QrScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {
        margin: 25,
        position: 'absolute',
        height: 50,
        borderRadius: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 18,
        elivation: 0
      } }} >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='QR' component={QrScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
