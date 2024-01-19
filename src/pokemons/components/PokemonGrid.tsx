import Image from "next/image";
import { SimplePokemonInterface } from "..";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
    pokemons: SimplePokemonInterface[];
}

export const PokemonGrid = ({pokemons}:PokemonGridProps) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        
      ))}
    </>
  );
};
