import { useState } from "react";
import personService from '../../services/persons'
import Notification from "./Notification";

const AddPerson = (props) => {

    const [newName, setNewName] = useState({
        name: '',
        number: '',
    })

    const [notification, setNotification] = useState();

    const addName = (event) => {
        event.preventDefault();
        const duplicateName = props.persons.filter(p => p.name === newName.name)

        if (duplicateName.length < 1) {
            personService.addPerson(newName)
                .then(response => {
                    props.setPersons(props.persons.concat(response.data))
                    setNotification({ message: `Added ${newName.name}`, color: 'green' });
                    setTimeout(() => {
                        setNotification(null);
                    }, 5000)
                })
                .catch(error => console.log("This is error log from add function", error));

        } else {

            if (window.confirm(`${newName.name} is already added to phonebook, replace the old number with a new one?`)) {
                personService.updatePerson(duplicateName[0].id, newName)
                    .then(returnedPersons => {
                        console.log(returnedPersons)
                        props.setPersons(props.persons.map(p => p.id !== duplicateName[0].id ? p : returnedPersons))

                    })
                    .catch(error => {
                        if (error.response.status === 404) {
                            setNotification({ message: `Information of ${newName.name} has already been removed from server" ` })
                            setTimeout(() => {
                                setNotification(null);
                            }, 5000)
                        }
                    })

            }
        }

        setNewName({ name: '', number: '' });

    }

    const handleNameChange = (event) => {
        setNewName({ ...newName, name: event.target.value })
    }

    const handlePhoneChange = (event) => {
        setNewName({ ...newName, number: event.target.value })
    }

    return (
        <>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName.name} onChange={handleNameChange} />
                </div>
                <div>number: <input value={newName.number} onChange={handlePhoneChange} /></div >

                <div>
                    <button type="submit">add</button>
                </div>

            </form>
            {notification && <Notification message={notification} />}
        </>
    )
}

export default AddPerson