import { pokefetch } from "@/actions/pokeApiFetch";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Pokemon {
    id: string,
    name: string,
    url: string,
}
export async function PokemonCard(){
    const data = await pokefetch();
    return(
        <div className=" grid grid-cols-3 gap-8">
            {data.map((data: Pokemon) =>(
                <Card key={data.id}>
                    <CardTitle>{data.name}</CardTitle>
                    <CardContent>{data.url}</CardContent>
                </Card>
            ))}
        </div>
    )
}