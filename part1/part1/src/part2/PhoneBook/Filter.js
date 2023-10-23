import { useState } from "react";

const Filter = (props) => {

    const [filteredName, setFilterName] = useState('')

    const handleFilter = (event) => {
        setFilterName(event.target.value)
    }

    const search = () => {
        props.setFilterResult(props.persons.filter(p => p.name.toLowerCase().includes(filteredName.toLowerCase())))
    }

    return (
        <div>
            <span>filter shown with <input value={filteredName} onChange={handleFilter} /> </span>
            <button onClick={search}>Filter </button>
        </div>
    )

}
export default Filter