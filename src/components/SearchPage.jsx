import { useContext, useEffect, useState } from 'react';
import SearchMovie from './SearchMovie';
import { MovieContext } from '../Context/MovieContext';

const SearchPage=()=>{

    const[inputValue,setInputValue]=useState("");
    const{getMovieData,search,setSearch,movieData}=useContext(MovieContext);


const handleChange=(e)=>{
    const inputData=e.target.value;
    setInputValue(inputData);
    setSearch(inputData);
    console.log("input");
}

useEffect(()=>{
    if(!inputValue) return;
    getMovieData(inputValue);
},[inputValue]);

    return(
        <div className="w-1/3 h-[530px] flex flex-col gap-4 mx-auto ">
            <input onChange={handleChange} value={search} type="text" className="px-4 mt-8 mb-2 w-full bg-blue-950 text-white border" />
            <div className='overflow-y-scroll flex flex-col gap-2 '>
                {
                   movieData && movieData.map((movie,i)=>{
                    return <SearchMovie film={movie} key={i} />
                   })
                }
           
          </div>
        </div>
    )
}
export default SearchPage;