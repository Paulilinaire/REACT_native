import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attrapez-les tous !</Text>
      <Image source={require('../assets/logoPokemon.png')} style={{ resizeMode: 'contain', height: "20%", width: "100%" }}/>
      <View style={styles.rowView}>
      <TouchableOpacity
            onPress={() => navigation.navigate('PokemonsList')}
            style={[styles.button, { backgroundColor: '#3c5aa6' }]}>
            <Text style={styles.text}>Pokemons</Text>
          
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => navigation.navigate('Pokedex')}
            style={[styles.button, { backgroundColor: '#c7a008' }]}>
            <Text style={styles.text}>Pokedex</Text>
            
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer : {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    color: '#2a75bb',
    marginBottom: 10,
  },
  rowView : {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    margin: 10,
    width: 170,
    height: 100
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  }
})