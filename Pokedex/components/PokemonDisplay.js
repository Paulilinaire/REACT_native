import { useDispatch } from 'react-redux'
import { fetchPokemon } from '../pokemonSlice'
import { useEffect, useState} from 'react'
import { useParams} from "react-router-dom";

const PokemonDisplay = () => {
    const id = useParams()
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchPokemon(id.id));
                setPokemon(response.payload)
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        };

        fetchData();
    }, []);

    return ( 
        <View>
        {
            pokemon &&
            <View>
                <Text>{pokemon.name}</Text>
                <Image source={{uri : pokemon.sprites.front_default}}/>
            </View>
        }  
        </View>
     )

}

export default PokemonDisplay;