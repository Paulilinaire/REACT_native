import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, ScrollView, FlatList } from 'react-native';
import { MEALS } from '../data/data';

export default function AboutTheMeal({ navigation, route }) {
  const mealId = route.params.mealId;

  // Find the meal with the specified mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <SafeAreaView style={styles.container}>
          <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={{ resizeMode: 'contain', height: "40%", width: "100%" }}
          />
          <Text style={styles.fontTitle}>{selectedMeal.title}</Text>
          <View style={styles.rowView}>
            <Text>{selectedMeal.duration}min</Text>
            <Text>{selectedMeal.affordability}</Text>
            <Text>{selectedMeal.complexity}</Text>
          </View>
         <View style={styles.view}>
            <Text style={styles.fontTitle}>Ingredients</Text>
            <FlatList 
              data={selectedMeal.ingredients} 
              renderItem={(ingredients)=> (
                  <View style={styles.ingredientsView}><Text style={styles.fontText} >{ingredients.item}</Text></View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.view}>
          <Text style={styles.fontTitle}>Steps</Text>
            <FlatList 
              data={selectedMeal.steps} 
              renderItem={(steps)=> (
                  <View style={styles.ingredientsView}><Text style={styles.fontText} >{steps.item}</Text></View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    gap: 10,
  },
  view: {
    alignItems: 'center',
  },
  fontTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ingredientsView: {
    backgroundColor: '#dbb7a1',
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  fontText: {
    color: 'black',
    fontSize: 15,
  }

});
