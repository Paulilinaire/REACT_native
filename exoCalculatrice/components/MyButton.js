import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function MyButton({ onPress, text }) {

  return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: { 
        flex: 1, 
        borderRadius: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        elevation: 3, 
        margin: 4, 
        padding: 15,
    },
    buttonText: {
      fontSize: 30, 
      color: 'black', 
  },
})