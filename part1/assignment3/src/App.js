import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const size = anecdotes.length
  const [points, setPoints] = useState(Array(size).fill(0))

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log(copy)
  }

  const handleNextAnecdotes = () => {
    return (
      setSelected(selected + 1)
    )
  }

  const mostVotes = () => {
    let mostVotesIndex = 0 
    for (let i = 0; i < size - 1; i++) {
      if (points[i] > points[mostVotesIndex] ) {
        mostVotesIndex = i
      }
    }
    return mostVotesIndex
  }
    
  return (
    <div>
      <h1> Anecdote of the day </h1>
      <p> {anecdotes[selected]} </p>
      <button onClick={handleNextAnecdotes}> next anecdote </button>
      <button onClick={handleVote}> vote </button>
      <h1> Anecdote with most votes </h1>
      <p> {anecdotes[mostVotes()]} </p>
      <p> has {points[mostVotes()]} votes</p>
    </div>
  )
}

export default App