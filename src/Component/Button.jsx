const Button = ({ onClick = "", type = "", text }) => {
    return (
        <button
            onClick={ onClick }
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type={ type }
        >
            { text }
        </button>
    )
}
export default Button;