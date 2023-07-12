import personService from '../services/persons'


const PersonForm = (props) => {
    const {persons, newName, newNumber, 
        handleNames, handleNumbers,
        emptyLines, setNewPerson, updatePerson} = props
    
    
    
    const submitPerson = (event) => {
        event.preventDefault()
        const newObject = persons.find(person => person.name === newName)
        if(newObject) {
            newObject.number = newNumber
            updatePerson(newObject)   
            emptyLines()
        }
        else if (newName !== '' && newNumber !== ''){
            setNewPerson()
            emptyLines()
        }
    }

    return (
        <div> 
            <form onSubmit={submitPerson}>
                <div>
                    name: <input value={newName} onChange={handleNames} />
                </div>
                <div> 
                    number: <input value={newNumber} onChange={handleNumbers} />    
                </div> 
                <div>
                <button type="submit">add </button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm