import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen({displayValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 2, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
        padding: 20,
    },
    text: {
        fontSize: 48, 
        color: 'black',
    }
})