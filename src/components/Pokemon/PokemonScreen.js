import { useState, useEffect } from 'react'
import axios from "axios";
import { PokemonCard } from './PokemonCard';

export const PokemonScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  //const [image, seImage] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
      return res.data.results
    })
    .then((results) => {
    return Promise.all(results.map((res) => axios.get(res.url)))
    })
    .then((results) => {
      setPokemons(results.map((res) => res.data))

    })
  }, []);

  console.log(pokemons);



  return (

       <div className="row rows-cols-1 row-cols-md-3 g-3 justify-content-center m-2">
            {
                pokemons.map(({ name, id }) => (
                  
                    <PokemonCard key={id} id={id} nombre={name}/>
                  
                
              ))
            }
      </div>
    
  )
}
