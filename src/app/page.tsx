 import { pokefetch } from "@/actions/pokeApiFetch";
import { PokemonCard } from "@/components/PokemonCard";

export default function Home() {

  return (
    <main className="w-full min-h-screen bg-slate-400">
      <PokemonCard/>
    </main>
  );
}
