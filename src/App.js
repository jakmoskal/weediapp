import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

    axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo').then(res => console.log('re', res));


  return (
    <div className="App">
      <header className="App-header">


      </header>
    </div>
  );
}

export default App;
