const Input = ({ type, name, value, onChange, placeholder = "" }) => {
    return (
        <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-4 dark:text-gray-700"
            placeholder={ placeholder }
            required
        />
    )
}
export default Input;