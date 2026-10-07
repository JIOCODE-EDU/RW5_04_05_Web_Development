import Card_Component from "./components/Card_Component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Location from "./components/Location";
import { useState } from "react";

// ReactJS Props

// Props are used to pass data from one component to another. They are read-only and cannot be modified by the child component. Props allow you to create reusable components that can accept different data inputs.

function App() {

  // let city = "Surat"
  // let state = "Gujarat"
  // let country = "India"

    const [city , setCity] = useState("Surat")
  const [state , setState] = useState("Gujarat")
  const [country , setCountry] = useState("India")
  

  return (
    <>
      <Location city={city} state={state} country={country}/>
      {/* <Location item1={city} item2={state} item3={country}/> */}
      {/* <Location/> */}

      <button onClick={() => setCity("Ahmedabad")}>change city</button>
      <button onClick={() => setState("Delhi")}>change state</button>
      <button onClick={() => setCountry("Canada")}>change country</button>
    </>
  );
}

export default App;
