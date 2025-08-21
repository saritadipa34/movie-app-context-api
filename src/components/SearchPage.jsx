
import SearchMovie from './SearchMovie';
const SearchPage=()=>{
    return(
        <div className="w-1/3 h-[530px] flex flex-col gap-4 mx-auto ">
            <input type="text" className="px-4 mt-8 mb-2 w-full bg-blue-950 text-white border" />
            <div className='overflow-y-scroll flex flex-col gap-5 '>
           <SearchMovie/>
           <SearchMovie/>
           <SearchMovie/>
           <SearchMovie/>
        <SearchMovie/>
         <SearchMovie/>
          <SearchMovie/>
          </div>
        </div>
    )
}
export default SearchPage;