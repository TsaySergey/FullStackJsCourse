import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const create = (newPersonObject) => { 
    const request = axios.post(baseUrl, newPersonObject)
    return request.then(response => response.data)
} 

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}

const edit = (id, newObject) => { 
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request
}

export default {create, getAll, deletePerson, edit}