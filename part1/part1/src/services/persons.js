import axios from "axios";

const urlBase = '/api/persons';

const getAllPersons = () => {
    return axios.get(urlBase)
}

const addPerson = (person) => {
    return axios.post(urlBase, person);
}

const updatePerson = (id, person) => {
    return axios.put(`${urlBase}/${id}`, person).then(response => response.data)
}

const deletePerson = (id) => {
    return axios.delete(`${urlBase}/${id}`);
}


export default { getAllPersons, addPerson, updatePerson, deletePerson }