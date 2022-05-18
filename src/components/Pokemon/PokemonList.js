import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
    
        {
            heroes.map( hero => (
                <PokemonCard 
                  key= { hero.id } 
                  { ...hero }/>
                    
                
            ))
        }
  
    </div>
  )
}
