import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen} from '../screens';
import SilaScreen from '../screens/SilaScreen';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="sila">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sila"
        component={SilaScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
