import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Screen from './components/Screen';
import Keypad from './components/Keypad';

export default function Calculator() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Calculator 3000</Text>
      <Screen></Screen>
      <Keypad></Keypad>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "lightgrey",
  },
  text:{
    marginTop: 20,
    color: "black",
    fontSize: 32,
  }
})