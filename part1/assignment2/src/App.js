import { useState } from 'react'

const ButtonGood = ({increment, text}) => {
  const handleClick = () => {increment()}
  return (
    <button onClick={handleClick}  > {text} </button>
  )
}

const ButtonNeutral = ({increment, text}) => {
  const handleClick = () => {increment()}

  return (
    <button onClick={handleClick} > {text} </button>
  )
}

const ButtonBad = ({increment, text}) => {
  const handleClick = () => {increment()}
  return (

    <button onClick={handleClick}> {text} </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td> {text}</td>
      <td> {value} </td>
    </tr>
  )
}

const StatisticPercentage = ({text, value}) => {
  return (
    <tr>
      <td> {text}</td>
      <td> {value} % </td>
    </tr>
  )
}



const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral 
  const average = (good - bad) / all 
  const positive = good / all * 100
  if(all === 0) {
    return(
    <div>
      <p>No feedback given</p>
    </div>
    )
  }
  else {
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text = 'good' value = {good} />
            <StatisticLine text = 'neutral' value = {neutral} />
            <StatisticLine text = 'bad' value = {bad} />
            <StatisticLine text = 'all' value = {all} />
            <StatisticLine text = 'average' value = {average} />
            <StatisticPercentage text = 'positive' value = {positive} />
          </tbody>
        </table>
      </div> 
    )
  }
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const incrementGood = () => { setGood(good + 1) }
  const incrementNeutral = () => {setNeutral(neutral + 1)}
  const incrementBad = () => {setBad(bad + 1)}

    return (
      <div>
        <h1>give feedback</h1>
        <ButtonGood increment={incrementGood} text='good' />
        <ButtonNeutral increment={incrementNeutral} text='neutral'/>
        <ButtonBad increment={incrementBad} text='bad'/>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App