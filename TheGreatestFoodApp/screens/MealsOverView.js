import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { CATEGORIES, MEALS } from '../data/data';
import { useLayoutEffect } from 'react';

export default function MealsOverView({ navigation, route }) { //navigation to get the navigation and route to get the route.params.categoryId
  const categoryId = route.params.categoryId;

  // Filter the meals based on the categoryId
  const filteredMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  // Change the title of the screen in the header according to the category we're in
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == categoryId
    ).title
    navigation.setOptions({
      title : categoryTitle
  })
  }, [categoryId, navigation])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredMeals}
        renderItem={({ item : meal }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutTheMeal', { mealId: meal.id })}
            style={styles.card}>
            <Image
              source={{ uri: meal.imageUrl }}
              style={{ resizeMode: 'cover', height: 225, width: 300, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
            />
            <Text>{meal.title}</Text>
            <Text>{meal.duration}min</Text>
            <Text>{meal.affordability}</Text>
            <Text>{meal.complexity}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 300,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    margin: 10,
    backgroundColor: 'white',
  },
});
