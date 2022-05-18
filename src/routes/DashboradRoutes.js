import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePokemon } from '../components/HomePokemon';
import { PokemonScreen } from '../components/Pokemon/PokemonScreen'
import { PokemonShow } from '../components/Pokemon/PokemonShow';
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboradRoutes = () => {
  return (
    <>
        <Navbar/>


        <div className= "container">
        <Routes>

            <Route path="search" element={<SearchScreen />} />
            <Route path="pokemones" element={<PokemonScreen />} />
            <Route path="pokemon/:pokemonId" element={<PokemonShow />} />

            <Route path="/" element={<HomePokemon />} />
        </Routes>
        </div>
    </>
  )
}
