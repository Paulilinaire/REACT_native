import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Keypad from './components/Keypad';

export default function Calculator() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Calculator 3000</Text>
      <Keypad></Keypad>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "whitesmoke",
  },
  text:{
    backgroundColor:"teal",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20,
    color: "black",
    fontSize: 32,
    color:"white",
    padding: 7,
    elevation: 5,
  }
})