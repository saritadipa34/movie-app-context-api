import { createContext,useState } from "react";

export const MovieContext=createContext();

export const MovieProvider=({children})=>{
    const[movieData,setMovieData]=useState([]);
const [search,setSearch]=useState("");

    const getMovieData=async(search)=>{
        try{
        const apiKey=import.meta.env.VITE_API_KEY;
        const response=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`);
        const data=await response.json();
        setMovieData(data.Search);
        console.log(data);
    } catch (error){
        console.log(error.message);
    }
    }

    return(
        <MovieContext.Provider value={{search,setSearch,getMovieData,movieData,setMovieData}} >
{children}
        </MovieContext.Provider>
    )
}
