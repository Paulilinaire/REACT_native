import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CATEGORIES } from '../data/data' 

export default function HomePage({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
    <FlatList data={CATEGORIES} renderItem={(itemData) => {
        return (
                <TouchableOpacity onPress={() => navigation.navigate('MealsOverView')} style={[styles.button, {backgroundColor: itemData.item.color}]}>
                    <Text style={styles.text}>{itemData.item.title}</Text>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    button: { 
        width: 150,
        height: 150,
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center', 
        elevation: 5, 
        margin: 3, 
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})