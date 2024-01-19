import {
  PokemonGrid,
  ResponsePokemonsInterface,
  SimplePokemonInterface,
} from "../../../pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemonInterface[]> => {
  const data: ResponsePokemonsInterface = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      next: {
        revalidate: 10,
      },
    }
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

//   throw new Error("Esto no deberia suceder");

  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);

  return (
    <>
      <div className="p-2 flex flex-col">
        <span className="text-5xl my-2">
          Listado de Pokemons <small>estatico</small>
        </span>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <PokemonGrid pokemons={pokemons} />
          {/* <span className="text-center">{pokemon.name}</span> */}
        </div>
      </div>
    </>
  );
};

export default PokemonsPage;
