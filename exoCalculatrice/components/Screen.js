import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen({displayValue}) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>{displayValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screenContainer: { 
        flex: 2, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
        padding: 20,
    },
    screenText: {
        fontSize: 48, 
        color: 'teal', 
    }
})