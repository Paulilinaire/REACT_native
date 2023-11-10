import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './screens/HomePage'
import MealsOverView from './screens/MealsOverView'
import AboutTheMeal from './screens/AboutTheMeal'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomePage'>
        <Stack.Screen name='HomePage' component={HomePage} options={{title: "All Categories"}} />
        <Stack.Screen name='MealsOverView' component={MealsOverView} />
        <Stack.Screen name='AboutTheMeal' component={AboutTheMeal} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})