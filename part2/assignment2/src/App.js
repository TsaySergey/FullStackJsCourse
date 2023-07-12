import { useState, useEffect } from 'react'
import Filtering from './components/Filtering'
import PersonForm from './components/PersonForm'
import Displaying from './components/Displaying'
import personService from './services/persons'
import Notification from './services/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFiltering, setNewFiltering] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorNotificationMessage, setErrorNotificationMessage] = useState(null)
  
  const getRequest = () => {
    personService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }
  
  useEffect(getRequest, [])
  

  const handleNames = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumbers = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFiltering(event.target.value)
  }

  const deleteTheUser = (id) => {
    const thePerson = persons.find((person) => person.id === id)
    if(window.confirm(`Do you really want to delete ${thePerson.name}`)) {
      personService.deletePerson(thePerson.id).then(() => {
          setPersons(persons.filter(person => person.id !== id))
      })
  }
  }

  const emptyLines = () => {
    setNewNumber('')
    setNewName('')
  }

  const setNewPerson = () => {
    const newPersonObject = {name: newName, 
      number: newNumber}
      personService
        .create(newPersonObject)
          .then(replyFromServ => setPersons(persons.concat(replyFromServ)))
            .then(() => {
              setNotificationMessage(`${newName} has been added`)
              setTimeout(() => {setNotificationMessage(null)}, 5000)
            })
        .catch(error => {
          setErrorNotificationMessage(`adding went wrong because of ${error}`)
          setTimeout(() => {setErrorNotificationMessage(null)}, 5000)
        })
  }

  const updatePerson = (newObject) => {
    if(window.confirm(`${newName} is already 
    added to phone book,
    replace the old number with new one?`)) {
        personService
          .edit(newObject.id, newObject)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== newObject.id 
                ? person 
                : returnedPerson.data
              ))
            })
            .catch(error => {
            setErrorNotificationMessage(`${newName} was removed`)
            setTimeout(() => { 
              setErrorNotificationMessage(null)
            }, 5000)
        
      })
    } 
  }
  
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} errorMessage={errorNotificationMessage}/>

      <Filtering persons={persons}
       newFiltering={newFiltering}
       handleFilter={handleFilter} />

      <h3>Add a new</h3>
      <PersonForm persons={persons} 
      newName={newName}
      newNumber={newNumber}
      handleNames={handleNames}
      handleNumbers={handleNumbers} 
      emptyLines={emptyLines}
      setNewPerson={setNewPerson}
      updatePerson={updatePerson}
      />

      <h3>Numbers</h3>
      <Displaying persons={persons} newFiltering={newFiltering} deleteTheUser={deleteTheUser} /> 
      
        
    </div>
  )
}

export default App