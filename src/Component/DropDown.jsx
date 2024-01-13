const DropDown = ({ name, value, onChange, array }) => {
    return (
        <select
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:shadow-outline dark:text-gray-500"
            name={ name }
            value={ value }
            onChange={ onChange }
            required
        >
            { array.map((item) => <option key={ item.value } value={ item.value }>{ item.label }</option>
            ) }
        </select>
    )
}
export default DropDown;