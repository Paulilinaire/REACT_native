import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View, FlatList } from 'react-native';

export default function PokemonCard({ navigation, pokemon }) {

  const colors = {
    normal: '#A8A77A',
    flying: '#A98FF3',
    poison: '#A33EA1',
    water: '#6390F0',
    fighting: '#C22E28',
    fire: '#EE813',
  };

  const backgroundColor = (type) => {
    return colors[type] || colors.normal;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetails', { pokemonId: pokemon.id })}
      style={styles.card}
    >
                  <View style={[styles.card, { backgroundColor: backgroundColor(pokemon.item.detailsData.types[1]?.type?.name) }]}>
                      <Text style={{fontSize: 15, fontWeight: "bold"}}>{pokemon.item.mainData.name}</Text>
                      <FlatList
                          data={pokemon.item.detailsData.types}
                          renderItem={({ item }) => (
                              <View >
                                  <Text >{item.type.name}</Text>
                              </View>
                          )}
                          keyExtractor={(item) => item.type.name}
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
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
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
