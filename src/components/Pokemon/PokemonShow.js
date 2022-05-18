import { useParams,Navigate } from "react-router";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export const PokemonShow = () => {
    const { pokemonId } = useParams();

    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ pokemon, setPokemon ] = useState([]);
    const navigate =  useNavigate();

    const handleReturn = () => {
      navigate('/pokemones', {
        replace:true
      });

    }

    // Solamente esta cargando mientras hacemos la petición,
    // cuando esta se resuelve o fue un éxito u un error.
    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => res.json())
      .then(data => {
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })
  }, [])
    
    console.log(pokemon)

    if (!pokemon) {
        return <Navigate to='/pokemones'/>

    }


    


    const imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  return (
    <div className='row mt-5'>
        <div className='col-4'>
            <img 
                src={ imagePath } 
                alt={ pokemon.name }
                className='img-thumbnail'/>
        </div>

        <div className='col-8'>
            <h3> {pokemon.name} </h3>

            <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Experiencia:</b> { pokemon.base_experience } </li>

            </ul>
            <button className='btn btn-outline-info'
                    onClick={ handleReturn }> 
                    Volver

            </button>
        </div>
    </div>
  )
}
