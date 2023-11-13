import { StyleSheet } from 'react-native'
import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from './screens/HomePage'
import PokemonsList from './screens/PokemonsList'
import PokemonDetails from './screens/PokemonDetails'
import Pokedex from './screens/Pokedex'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'HomePage'>
                <Stack.Screen name='HomePage' component={HomePage} options={{title: "Home"}}/>
                <Stack.Screen name='PokemonsList' component={PokemonsList} options={{title:"Pokemons"}}/>
                <Stack.Screen name='PokemonDetails' component={PokemonDetails} options={{title:"Pokemon"}}/>
                <Stack.Screen name='Pokedex' component={Pokedex}/>
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})