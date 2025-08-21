
const Button=({text,onClick,className})=>{
    return(
        <button onClick={onClick}
        className={`border bg-green-500 rounded-lg cursor-pointer ${className}`}>
            {text}
        </button>
    )
}
export default Button;