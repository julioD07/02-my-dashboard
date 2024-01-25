"use client";
import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favoritePokemons") || "{}"
    );
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
