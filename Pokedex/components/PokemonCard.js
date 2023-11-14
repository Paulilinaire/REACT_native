import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, FlatList } from 'react-native';

export default function PokemonCard({ navigation, pokemon }) {

  // defining colors for categories 
  const colors = {
    normal: '#A8A77A',
	  fire: '#EE8130',
	  water: '#6390F0',
	  electric: '#F7D02C',
	  grass: '#7AC74C',
	  ice: '#96D9D6',
	  fighting: '#C22E28',
	  poison: '#A33EA1',
	  ground: '#E2BF65',
	  flying: '#A98FF3',
	  psychic: '#F95587',
	  bug: '#A6B91A',
	  rock: '#B6A136',
	  ghost: '#735797',
	  dragon: '#6F35FC',
	  dark: '#705746',
	  steel: '#B7B7CE',
	  fairy: '#D685AD',
  };

  // applying colors
  const backgroundColor = (pokemon) => {
    const types = pokemon.item.detailsData.types;
    console.log('Types:', types);
    const firstType = types.length > 0 ? types[0].type.name : 'normal';
    return colors[firstType] || colors.normal;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetails', { pokemonId: pokemon.mainData.id }, {pokemon : pokemon})}
      style={styles.card}
    >
                  <View style={[styles.card, { backgroundColor: backgroundColor(pokemon) }]}>
                      <Text style={{fontSize: 15, fontWeight: "bold"}}>{pokemon.item.mainData.name}</Text>
                      <FlatList
                          data={pokemon.item.detailsData.types}
                          renderItem={({ item }) => (
                              <View >
                                  <Text >{item.type.name}</Text>
                              </View>
                          )}
                          keyExtractor={(item) => `${pokemon.id}-${item.type.name}`}
                      />
                      <Image
                          style={styles.image}
                          source={{
                              uri: pokemon.item.detailsData.sprites["front_default"]
                          }}
                      />
                  </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'center',
    elevation: 3,
    margin: 10,
    width: 175,
    height: 165,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
