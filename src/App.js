import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import React, { useState } from 'react';

function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) { // ciudad = "Londres"
    const apiKey = "9ec47a8150e44e6385aae05be36f9e11";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
        };
        //Chequear que no esté ya incluida en el cities
        setCities([...cities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  function onClose(id) {
    setCities(cities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
        <div>
          <Nav onSearch={onSearch} />
          <Cards cities={cities} onClose={onClose}/>
        </div>
      <h1 className="title">The WatherApp</h1>
    </div>
  );
}

export default App;
