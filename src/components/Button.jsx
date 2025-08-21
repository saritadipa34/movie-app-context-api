
const Button=({text,onClick})=>{
    return(
        <button onClick={onClick} className="border bg-green-500 rounded-lg px-1 text-sm cursor-pointer">
            {text}
        </button>
    )
}
export default Button;