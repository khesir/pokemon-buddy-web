 import { pokefetch } from "@/actions/pokeApiFetch";
import { PokemonCard } from "@/components/PokemonCard";

export default function Home() {

  return (
    <main className="flex flex-col py-8 px-18 my-5">
      <h1>Pokedex</h1>
      <PokemonCard/>
    </main>
  );
}
