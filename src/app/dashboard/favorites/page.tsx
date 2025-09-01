import { PokemonGrid } from "@/pokemons/components/PokemonGrid";

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small>Glogal State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
