import React from 'react'
import Forecast from './Forecast'

const Filtering = ({countryAll, countrySearch, buttonHandler}) => {
    const countriesNames = countryAll.map(country => country.name.common)
    const filteredCountry = countriesNames
    .filter(country => country.toLowerCase()
    .includes(countrySearch.toLowerCase()))
    console.log(filteredCountry)
    
    


    if(filteredCountry.length >= 10)
        return <div>Too many matches, specify another filter</div>

    else if(filteredCountry.length === 1) {
        console.log(filteredCountry)
        const finalCountry = countryAll.find(country => country.name.common.includes(filteredCountry[0]))
        const languages = Object.values(finalCountry.languages) 
        return(
            <div>
                <h1>{finalCountry.name.common}</h1>
                <li key={finalCountry.capital}> capital {finalCountry.capital} </li>
                <li key={finalCountry.area}> area {finalCountry.area} </li>
                <h4>languages:</h4>
                <ul>
                    {languages.map(language => <li key={language}> {language} </li>)}
                </ul>
                <img src={finalCountry.flags.png}/>
                <h2> Weather in {finalCountry.capital} </h2>
                <Forecast latitude={finalCountry.capitalInfo.latlng[0]}
                longitude={finalCountry.capitalInfo.latlng[1]}
                /> 
            </div>
        ) 
    }
       


    return (
        <div> 
                {filteredCountry.map(country => {
                    return (
                        <div>
                            <li key={country}>  
                                {country}
                                <button type='submit' onClick={() => buttonHandler(country)}>show</button>
                            </li> 
                        </div>
                    )   
                })}
                
        </div>
    )
}

export default Filtering