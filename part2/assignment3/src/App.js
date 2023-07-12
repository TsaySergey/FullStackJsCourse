import {useState, useEffect} from 'react'
import axios from 'axios'
import Filtering from './components/Filtering'
import Forecast from './components/Forecast'
const App = () => {
  const [countrySearch, setCountrySearch] = useState('')
  const [countriesAll, setCountriesAll] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  
  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then((response => {
      setCountriesAll(response.data)
    }))
  },[])

  const countryHandler = (event) => {
    setCountrySearch(event.target.value)
  }
  const buttonHandler = (countryName) => {
    setCountrySearch(countryName)
  }
  
  if(countriesAll === '') {
    return null
  }

  return (
    <div>
      find countries <input onChange={countryHandler} />
      <Filtering countryAll={countriesAll}
      countrySearch={countrySearch}
      buttonHandler={buttonHandler} /> 
    </div>
  )
  
  
}

export default App