import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data' 

export default function MealsOverView({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList data={MEALS} renderItem={(itemData) => {
        return (
                <TouchableOpacity onPress={() => navigation.navigate('AboutTheMeal')} style={styles.card}>
                    <Text style={styles.text}>{itemData.item.title}</Text>
                    <Text>{itemData.item.duration}min</Text>
                    <Text>{itemData.item.affordability}</Text>
                    <Text>{itemData.item.complexity}</Text>
                </TouchableOpacity>
        )
    }} keyExtractor={(item, index) => {
        return index
    }}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: { 
        width: 300,
        borderRadius: 20,
        height: 300,
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        elevation: 5, 
        margin: 3, 
        padding: 10,
    },
})