"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const pokemonFavorites = useAppSelector((state) =>
    Object.values(state.pokemonsSlice.favorites)
  );
  const [pokemons, setPokemons] = useState(pokemonFavorites);


  return (
    <>
      {pokemonFavorites.length > 0 ? (
        <PokemonGrid pokemons={pokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="p-2 flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
