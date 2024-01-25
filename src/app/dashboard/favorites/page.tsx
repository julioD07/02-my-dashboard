import { Metadata } from "next";
import { FavoritePokemons } from "../../../pokemons";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Listado de Pokemons",
};

const PokemonsPage = async () => {
  return (
    <>
      <div className="p-2 flex flex-col">
        <span className="text-5xl my-2">
          Pokemons Favoritos{" "}
          <small className="text-blue-500">Global State</small>
        </span>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <FavoritePokemons />
          {/* <span className="text-center">{pokemon.name}</span> */}
        </div>
      </div>
    </>
  );
};

export default PokemonsPage;
