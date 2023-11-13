import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function StepsList() {
    return (
        <View>
                <Text style={styles.fontTitle}>Steps</Text>
                <FlatList 
                  data={selectedMeal.steps} 
                  renderItem={(steps)=> (
                      <View style={styles.view}><Text style={styles.fontText} >{steps.item}</Text></View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      view: {
        backgroundColor: '#dbb7a1',
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
      },
      fontTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    })