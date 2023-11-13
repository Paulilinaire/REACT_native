import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function IngredientsList() {

  return (
    <ScrollView>
            <Text style={styles.fontTitle}>Ingredients</Text>
            <FlatList 
              data={selectedMeal.ingredients} 
              renderItem={(ingredients)=> (
                  <View style={styles.view}><Text style={styles.fontText} >{ingredients.item}</Text></View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
    </ScrollView>
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