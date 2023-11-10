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
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MealsOverView')}
            style={[styles.button, { backgroundColor: itemData.item.color }]}
          >
            <Text style={styles.text}>{itemData.item.title}</Text>
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
        elevation: 5,
        margin: 3,
        padding: 10,
        width: '48%',
  },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
  },
});
