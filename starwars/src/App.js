import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import CharCard from './CharCard'

const App = () => {
  const [resultsArray, setresultsArray] = useState([]);

  useEffect( () => {
    // Follow the documentation to learn how to fetch a list of "people"
    axios.get('https://swapi.co/api/people/')
    .then (res => {
      console.log(res.data.results);
      // Fetch a list of Star Wars characters from the Star Wars API (or SWAPI) and render them to the screen.
      setresultsArray (res.data.results)
      // Set the data you fetch to state.
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {/* //used map */}
      {resultsArray.map(card =>{
        return <div className = 'App'>
          {/* You must have at least one element for each star wars character in the data set. */}
          <h1>Character Name and Height: </h1><CharCard name ={card.name} height ={card.height} />
              </div>
      })}
    </div>
  );
}

export default App;
