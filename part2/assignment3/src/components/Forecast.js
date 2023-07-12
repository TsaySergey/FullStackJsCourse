import {useState, useEffect} from 'react'
import axios from 'axios'


const Forecast = ({latitude, longitude}) => { 
    const [forecastData, setForecastData] = useState(null)
    const webSiteApi = 'https://api.openweathermap.org/data/2.5/forecast?'
    const api_key = process.env.REACT_APP_API_KEY
    const pictureUrl = 'https://openweathermap.org/img/wn/'
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${webSiteApi}lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`);
            setForecastData(response.data);
          } catch (error) {
            console.error('Error fetching forecast data:', error);
          }
        };
    
        fetchData();
      }, [latitude, longitude, api_key])
        
    
    console.log(forecastData)
    
    const ImageOfWeather = ({id}) => {
        if (id === 800) {
            return <img src={`${pictureUrl}01d@2x.png`} alt="Clear sky" />;
          } else if (id === 801) {
            return <img src={`${pictureUrl}02d@2x.png`} alt="Few clouds" />;
          } else if (id === 802) {
            return <img src={`${pictureUrl}03d@2x.png`} alt="Scattered clouds" />;
          } else if (id === 803 || id === 804) {
            return <img src={`${pictureUrl}04d@2x.png`} alt="Broken clouds" />;
          } else if (id <= 299 && id >= 200) {
            return <img src={`${pictureUrl}11d@2x.png`} alt="Thunderstorm" />;
          } else if (id >= 300 && id <= 399) {
            return <img src={`${pictureUrl}09d@2x.png`} alt="Drizzle" />;
          } else if (id <= 500 && id >= 504) {
            return <img src={`${pictureUrl}10d@2x.png`} alt="Rain" />;
          } else if (id <= 531 && id >= 520) {
            return <img src={`${pictureUrl}09d@2x.png`} alt="Shower rain" />;
          } else if (id >= 600 && id <= 699 || id === 511) {
            return <img src={`${pictureUrl}13d@2x.png`} alt="Snow" />;
          } else if (id >= 700 && id <= 799) {
            return <img src={`${pictureUrl}50d@2x.png`} alt="Mist" />;
          } else {
            return null; 
          }
        
    }

    if (!forecastData) {
        return <div>Loading forecast data...</div>;
      }
    return (
    <div> 
        <p> Temperature {forecastData.list[39].main.temp} Celcius</p>
        <ImageOfWeather id={forecastData.list[39].weather[0].id}/>
        <p>Wind {forecastData.list[39].wind.speed} m/s</p>
    </div>
    )
}


export default Forecast