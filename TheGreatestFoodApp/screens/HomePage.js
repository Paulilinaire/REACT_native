import React from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../data/data';

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={(category) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MealsOverView', {categoryId: category.item.id})}
            style={[styles.button, { backgroundColor: category.item.color }]}>
            <Text style={styles.text}>{category.item.title}</Text>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    button: {
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        margin: 10,
        width: '45%',
  },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
  },
});
