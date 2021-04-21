import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import App from './App';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WeatherDetail from './components/WeatherDetail';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WeatherDetail" component={WeatherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
