import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function MyButton({ onPress, text}) {

  return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>{text}</Text>
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
        margin: 2, 
        padding: 15,
    }
})