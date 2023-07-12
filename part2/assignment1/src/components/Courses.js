const Courses = ({courses}) => {
    const [course1, course2] = courses
    const { name: name1, id: id1, parts: parts1 } = course1
    const { name: name2, id: id2, parts: parts2 } = course2
  
    const Header = ({header}) => {
      return(
        <h1> {header} </h1>
      )
    }
     
   
    const Content = ({content}) => {
      return (
        <div>
          {content.map((part) => (
            <li key={part.id}>
             {part.name} {part.exercises}
             </li>
          ))}
        </div>
      )
    }
  
    const Sum = ({summa}) => { 
      const sum = summa.reduce((total, part) => {
        return total + part.exercises
      }, 0);
      return <p> Total of {sum} exercises</p>
    }
  
    return (
      <div>
        <Header header={name1}/>
        <ul> 
          <Content content={parts1}/>
        </ul>
        <Sum summa={parts1}/>
  
        <Header header={name2}/>
        <ul> 
          <Content content={parts2}/>
        </ul>
        <Sum summa={parts2}/>
      </div>
    )
  }

  export default Courses