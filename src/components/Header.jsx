import { Link } from "react-router-dom";
import Button from "./Button";
const Header=()=>{

    const handleClick=()=>{
console.log("click");
    }
    return(
        <div className="bg-blue-950 h-15 w-full flex justify-around items-center">
           <h1 className="text-white cursor-pointer">WatchList</h1>
            <div className="flex gap-10 text-white">
              <Link to="/"> <h1 className="text-white cursor-pointer">WatchList</h1></Link> 
              <Link to="/Watched"> <h1 className="cursor-pointer">Watched</h1></Link>
                <Link to="searchpage"><Button text={"Add"} onClick={handleClick} className={" px-2 text-sm "}/> </Link>
            </div>
        </div>
    )
}
export default Header;