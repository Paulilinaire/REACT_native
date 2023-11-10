import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, ScrollView, FlatList } from 'react-native';
import { MEALS } from '../data/data';

export default function AboutTheMeal({ navigation, route }) {
  const mealId = route.params.mealId;

  // Find the meal with the specified mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <SafeAreaView style={styles.container}>
      {selectedMeal && (
        <>
          <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={{ resizeMode: 'cover', height: "40%", width: "100%" }}
          />
          <Text>{selectedMeal.title}</Text>
          <View style={styles.detailView}>
            <Text>{selectedMeal.duration}min</Text>
            <Text>{selectedMeal.affordability}</Text>
            <Text>{selectedMeal.complexity}</Text>
          </View>
          <ScrollView>
            <Text>Ingredients</Text>
            <FlatList 
              data={MEALS} 
              renderItem={(meal)=> (
                  <View style={styles.ingredientsView}><Text>{meal.item.ingredients}</Text></View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  detailView: {
    flexDirection: 'row',
    gap: 10,
  },
  ingredientsView: {
    backgroundColor: 'lightsalmon',
    margin: 10,
    borderRadius: 5,
  }

});
