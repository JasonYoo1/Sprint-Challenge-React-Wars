import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import CharCard from './CharCard'
import { Header, Element, pop } from './Style'

const App = () => {
  const [resultsArray, setresultsArray] = useState([]);

  useEffect( () => {
    // list of "people"
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

      {/* .map in CharCard component to break down keys*/}
      {resultsArray.map(card =>{
        return <div className = 'App'>
          {/* You must have at least one element for each star wars character in the data set. */}
         <Header> <h1>Character Name and Height: </h1></Header><CharCard name ={card.name} height ={card.height}  />
              <Element>Random fact! {card.name} weighs: <CharCard mass ={card.mass}/></Element>
              </div>
      })}
    </div>
  );
}

export default App;
