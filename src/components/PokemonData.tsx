import { LoadUrl } from "@/actions/loadImageUrl"
import { PokemonStats, Stat } from "./PokemonStats";
import { Button } from "./ui/button";

export async function PokemonData({url} : {url: string}){
    const data = await LoadUrl(url);
    const stat = data.stats;
    return(
        <div className="flex justify-between">
            <div className="flex flex-col">
                {stat.map((stat: Stat, index:string) => (
                    <PokemonStats statData= {stat} key={index}></PokemonStats>
                ))}
                <div>
                    <Button className=" mt-5" variant={"outline"}>More Details</Button>
                </div>
            </div>
            <div><img  src={data.sprites.back_default} alt={data.name}/></div>
        </div>
    )
}
