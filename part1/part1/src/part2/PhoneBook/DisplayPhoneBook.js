import personService from '../../services/persons';

const DisplayPhoneBook = (props) => {

    const deletePerson = (id) => {
        if (window.confirm("Are you sure to delete customer")) {
            personService.deletePerson(id)
                .then(props.setPersons(props.persons.filter(p => p.id !== id)));
        }
    }

    return (
        <>
            {props.persons.map(p =>
                <p key={p.id} >
                    {p.name} {p.number}
                    <button onClick={() => deletePerson(p.id)}>delete</button>
                </p>


            )}
        </>)

}

export default DisplayPhoneBook;