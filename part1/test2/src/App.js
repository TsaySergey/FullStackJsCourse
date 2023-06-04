/*
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
*/


/*
const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}
*/

/*
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)
  return (
    <div>{counter}</div>
  )
}
*/

/*
import {useState} from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)   
   const setToZero = () => setCounter(0)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>        plus
      </button>
      <button onClick={setToZero}>        zero
      </button>
    </div>
  )
}
*/ 

import {useState} from 'react'


const hello = () => 
{
  
    const handler = () => 
    {
      console.log('hello world')   
      return handler 
    } 
  
  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
  }

  const App = () => 
  {
    const [value, setValue] = useState(10)
  
    const hello = (who) => 
    {    
      const handler = () => 
      {      
        console.log('hello', who)    
      }    
      return handler  }
      return (
        <div>
          {value}
          <button onClick={hello('world')}>button</button>
          <button onClick={hello('react')}>button</button>      
          <button onClick={hello('function')}>button</button>   
        </div>
      )
  }

export default App
