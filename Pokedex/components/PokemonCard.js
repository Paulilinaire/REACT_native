import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard({ index }) {
  const [pokemon, setPokemon] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchPokemon(index));
        setPokemon(response.payload);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [dispatch, index, setPokemon]);

  // Check if pokemon is still loading or not available
  if (!pokemon) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetails', { pokemon })}
      style={[styles.card, { backgroundColor: '#c7a008' }]}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.text}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    margin: 10,
    width: 150,
    height: 200,
  },
  text: {
    color: 'black',
    marginTop: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
});
