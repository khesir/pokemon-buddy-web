import { LoadUrl } from "@/actions/loadImageUrl";
import { pokefetch } from "@/actions/pokeApiFetch";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { PokemonData } from "./PokemonData";

interface Pokemon {
    id: string,
    name: string,
    url: string,
}
export async function PokemonCard(){
    const data = await pokefetch();
    return(
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5">
            {data.results.map((data: Pokemon, index: string) =>(
                <Card key={index}>
                    <CardTitle className="p-2">{data.name}</CardTitle>
                    <CardContent className="p-2">
                        <PokemonData url={data.url}/> 
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}