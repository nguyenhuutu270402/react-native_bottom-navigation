import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent={true}
      />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

