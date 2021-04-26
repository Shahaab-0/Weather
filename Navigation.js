import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WeatherMain from './components/WeatherMain';
import WeatherDetail from './components/WeatherDetail';
import SplashScreen from './components/SplashScreen';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WeatherMain"
          component={WeatherMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WeatherDetail"
          component={WeatherDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// const MyTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="WeatherMain"
//       activeColor="#6c5ecf"
//       tabBarOptions={{
//         activeTintColor: '#6c5ecf',
//         inactiveTintColor: '#808191',
//         style: {
//           backgroundColor: '#252836',
//           elevation: 0,
//           borderTopWidth: 0,

//           height: 55,
//         },

//         labelStyle: {fontSize: 10},
//       }}
//       shifting="true">
//       <Tab.Screen
//         name="WeatherMain"
//         component={WeatherMain}
//         options={{title: 'Detail'}}
//       />
//       <Tab.Screen
//         name="WeatherDetail"
//         component={WeatherDetail}
//         options={{title: 'Detail'}}
//       />
//     </Tab.Navigator>
//   );
// };

export default Navigation;
