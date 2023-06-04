/*
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}   // App is used as a method in here that constains variables and return output.
 // HTML taging system works in here however everything is got compiled to JSX. Which is XML-like. It is done to Javascript to read it.


export default App //Do not delete it
*/

/*
const Hello = () => {  return (    <div>      <p>Hello world</p>    </div>  )}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />    
      <Hello />
      <Hello />      
      <Hello />
    </div>
  )
}

export default App
*/
/*
const Hello = (props) => {  return (
  <div>
    <p>Hello {props.name}</p>    </div>
)
} 

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />  
      <Hello name='George' />     
      <Hello name='Daisy' />

    </div> 
  ) // Method "App" uses method "Hello" to print out name. App refer to Hello to output "Hello" or "Hello" + name
}
export default App
*/
const Hello = (props) => {
  console.log(props)  
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old     
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  return (
    <>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </>
  )
}

export default App