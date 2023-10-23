import { useState, useEffect } from "react"
import axios from "axios"
import AddPerson from "./AddPerson"
import Filter from "./Filter"
import DisplayPhoneBook from "./DisplayPhoneBook"
import '../../index.css'

const AppPhoneBook = () => {
    const [persons, setPersons] = useState();


    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
            .catch(error => console.log(error))

    }, [])

    const [filteredResult, setFilterResult] = useState();


    return (
        <div>
            <h1>Phonebook</h1>
            <Filter persons={persons} filteredResult={filteredResult} setFilterResult={setFilterResult} />
            <h3>add a new</h3>
            <AddPerson persons={persons} setPersons={setPersons} />

            <h2>Filtered Results</h2>
            {filteredResult && filteredResult.map((p => <p key={p.id}>{p.name} {p.phone}</p>))}
            <h2> Numbers </h2>
            {persons && <DisplayPhoneBook setPersons={setPersons} persons={persons} />}

        </div>
    )

}

export default AppPhoneBook