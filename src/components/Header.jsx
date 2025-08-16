import Button from "./Button";
const Header=()=>{
    return(
        <div className="bg-blue-950 h-15 w-full flex justify-around items-center">
            <h1 className="text-white cursor-pointer">WatchList</h1>
            <div className="flex gap-10 text-white">
                <h1 className="text-white cursor-pointer">WatchList</h1>
                <h1 className="cursor-pointer">Watched</h1>
                <Button text={"Add"} />
            </div>
        </div>
    )
}
export default Header;