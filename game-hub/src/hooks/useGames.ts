import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{  platform: Platform  }[]
    metacritic: number;
}

const useGames= (genre: Genre | null, platform: Platform | null) => 
useData<Game>('/games',{ params: {
    genres: genre?.id, platforms: platform?.id 
}}, 
[genre?.id, platform?.id]);

export default useGames;

// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
// import { Genre } from "./useGenres";

// export interface Platform{
//     id: number;
//     name: string;
//     slug: string;
// }

// export interface Game{
//     id: number;
//     name: string;
//     background_image: string;
//     parent_platforms:{  platform: Platform  }[]
//     metacritic: number;
// }

// interface fetchGamesResponse{
//     count: number;
//     results: Game[];
// }



// const useGames = (genre: Genre | null) =>{


    
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
    
//     useEffect(() =>{

//         const controller = new AbortController();
//         setIsLoading(true);
//         apiClient
//         .get<fetchGamesResponse>('/games',{params: {genres: genre?.id}})
//         .then(res => {
//             setGames(res.data.results)
//             console.log(games);
//             setIsLoading(false);
//         })
//         .catch(err => {
//             if (err instanceof CanceledError) return;
//             setError(err.message);
//             setIsLoading(false);
//         });
        

//         return () => controller.abort();
    
//     },[]);

//     return {games, error, isLoading}

// }

// export default useGames;