import personService from '../services/persons'

const Displaying = (props) => {
    const {persons, newFiltering, deleteTheUser } = props 
    const filteredObject = persons.filter(
        (person) => person?.name?.toLowerCase().includes(newFiltering.toLowerCase())
    )

    const handleDelete = (id) => {
        deleteTheUser(id)
    }
    
    return (
        <div> 
            {
                newFiltering === '' 

                ? (persons.map((person) => (
                <div key={person.id}>
                    <li>
                        {person.name} {person.number} 
                        <button type='button' onClick={() => handleDelete(person.id)}>Delete</button>
                    </li>
                </div> 
                )))
                
                : (filteredObject.map((person) => (
                    <div key={person.id}>
                    <li>
                        {person.name} {person.number} 
                        <button type="button" onClick={() => handleDelete(person.id)}>Delete</button>
                    </li>
                </div> 
                )))
            }
        </div> 
    )
}


export default Displaying