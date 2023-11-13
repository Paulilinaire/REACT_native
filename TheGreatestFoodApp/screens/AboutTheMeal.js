import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, FlatList } from 'react-native';
import { MEALS } from '../data/data';
import IngredientsList from '../components/IngredientsList';

export default function AboutTheMeal({ navigation, route }) {
  const mealId = route.params.mealId;

  // Find the meal with the specified mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <SafeAreaView style={styles.container}>
          <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={{ resizeMode: 'cover', height: "40%", width: "100%" }}
          />
          <Text style={styles.fontTitle}>{selectedMeal.title}</Text>
          <View style={styles.rowView}>
            <Text>{selectedMeal.duration}min</Text>
            <Text>{selectedMeal.affordability}</Text>
            <Text>{selectedMeal.complexity}</Text>
          </View>
          <IngredientsList/>
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
  fontText: {
    color: 'black',
    fontSize: 15,
  }

});
