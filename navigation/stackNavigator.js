import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from '../screens/loginScreen';
import registerScreen from '../screens/registerScreen';
import homeScreen from '../screens/homeScreen';
import bottomTab from '../screens/bottomTab';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="loginScreen" component={loginScreen} />
            <Stack.Screen name="registerScreen" component={registerScreen} />
            <Stack.Screen name="homeScreen" component={homeScreen} />
            <Stack.Screen name="bottomTab" component={bottomTab} />
        </Stack.Navigator>
    
    </NavigationContainer>
  )
}

export default StackNavigator