import { createContext, useEffect } from "react";

export const MovieContext=createContext();

export const MovieProvider=({children})=>{

    const getMovieData=async()=>{
        try{
        const apiKey=import.meta.env.VITE_API_KEY;
        const response=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=Inception`);
        const data=await response.json();
        console.log(data);
    } catch (error){
        console.log(error.message);
    }
    }

    useEffect(()=>{
        getMovieData();
    },[]);

    return(
        <MovieContext.Provider value={{}} >
{children}
        </MovieContext.Provider>
    )
}
