import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
import WatchList from "./WatchList";
import Header from "./Header";
import Watched from "./Watched";
import { useContext, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";

const MovieApp=()=>{
const {movieData,setMovieData}=useContext(MovieContext);

useEffect(()=>{
const stored=localStorage.getItem('movieGroup');
const parsed=stored && stored !== "undefined" ? JSON.parse(stored) : []
setMovieData(parsed);
},[]);

useEffect(()=>{
    if(movieData && movieData.length > 0){
        console.log(movieData)
localStorage.setItem('movieGroup',JSON.stringify(movieData))
}},[movieData])

    return(
        <div>
            <Router>
            <Header />
                <Routes>
                    <Route element={<WatchList />} path="/"></Route>
                    <Route element={<SearchPage />} path="/searchpage"> </Route>
                    <Route element={<Watched />} path="/Watched"></Route>
            </Routes>
            </Router>
        </div>
    )
}
export default MovieApp;