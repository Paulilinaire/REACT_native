import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function MyButton({ onPress, text, isOperatorButton, isOperatorTextButton }) {

  return (
      <TouchableOpacity onPress={onPress} style={isOperatorButton ? styles.operatorButton : styles.button}>
        <Text style={isOperatorTextButton ? styles.operatorTextButton : styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: { 
        flex: 1, 
        borderRadius: 50,
        borderColor:"grey",  
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        elevation: 5, 
        margin: 4, 
        padding: 15,
    },
    buttonText: {
      fontSize: 30, 
      color: 'lightseagreen',  
  },
  operatorButton: {
    flex: 1, 
    borderRadius: 50,
    borderColor:"grey",  
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 5, 
    margin: 4, 
    padding: 15,
    backgroundColor: "lightseagreen",
  },
  operatorTextButton: {
    fontSize: 30,
    color: "white",
  }
})