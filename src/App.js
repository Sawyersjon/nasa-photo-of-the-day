import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'





function App() {

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=GJMMEWVSfEdzwBB2HgvjlAXRGThD9aBfQ9okkKDO`)
      .then(res => {
        setPhoto(res.data.url)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  

  return (
    <div className="App">

      <h1>Astronomy Photo of the Day!!</h1>

      <img src={photo} alt = ''></img>

    </div>
  );
}

export default App;
