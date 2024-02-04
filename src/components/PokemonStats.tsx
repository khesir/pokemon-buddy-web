import { Progress } from "@/components/ui/progress";
import React from "react";

export interface Stat {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string,
    }
}

export function PokemonStats(
 {statData} : {statData: Stat} 
){
    return(
        <div className="flex items-center gap-4 justify-between">
            <h3 className="text-lg font-semibold">{statData.stat.name}</h3>
            <h3 className="text-base">{statData.base_stat}</h3>
            <Progress className="w-20" value={statData.base_stat} />
        </div>
    );
}