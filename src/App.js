import React, { useEffect, useState } from 'react';
import './index.css';
const article = (data) => {
  console.log(data);
  //return result.map((iteration => {
  return <article>
    <div className="location">
      <p>Location : {data.name}</p>
    </div>
    <div className="temp">
      <p>Temp : {data.main.temp}</p>
    </div>
    <div className="description">
      <h3>{data.weather.description}</h3>
    </div>
    <div className="bottom">
      <div className="feels">
        <p>Feels like{data.main.feels_like}</p>
      </div>
      <div className="humidity">
        <p>Humidity:{data.main.humidity}</p>
      </div>
      <div className="wind">
        <p>Wind:{data.wind.speed}</p>
      </div>
    </div>
  </article>

}
function App() {
  //const ul = "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=8b28ad547a247dce08893c7e867fba18";
  const ul1 = "https://api.openweathermap.org/data/2.5/weather?appid=8b28ad547a247dce08893c7e867fba18&q=";

  const [input, setInput] = useState();
  const [fetchdata, setFetchdata] = useState();
  const [SearchUrl, setSearchUrl] = useState();

  const handleChange = (iteration) => setInput(iteration.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchUrl(ul1 + input)
  }
  useEffect(() => {
    fetch(SearchUrl)
      .then(response => response.json())
      .then(jsonobj => setFetchdata(article(jsonobj)))
  }, [SearchUrl]);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="top">
            <center>
              <h1>WEATHER REPORT</h1>
              <input type="text" value={input} onChange={handleChange} placeholder="Enter city" /><br />
              <button type="submit" onClick={handleSubmit}>submit</button>
            </center>
          </div>
        </div>
      </div>
      <main>
        {fetchdata}
      </main>
    </>
  )
}

export default App;
