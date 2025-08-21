import Button from './Button'

const SearchMovie=()=>{

    return(
         <div className="w-full bg-amber-300 ">
<div className="h-22 w-full flex gap-5 ">
    <img className="h-full w-2/7"
     src="https://th.bing.com/th/id/OIP.41X2G_sGbWB2LmGfMQ-jUQHaKL?w=236&h=324&c=7&o=5&dpr=1.5&pid=1.20" alt="movie" />
     <div className='flex flex-col gap-2 '>
    <h1>movie:kkkkkkkkkkkkkkkk</h1>
    <h1>2005</h1>
    <div className='flex w-70 justify-between'>
        <Button text={"ADD TO WATCHLIST"} className={"text-[10px] px-2 "}/>
        <Button text={"ADD TO WATCHED"} className={"text-[10px] px-2 "}/>
    </div>
    </div>
</div>
            </div>
    )
}
export default SearchMovie;