
import React from 'react';
import './App.css';
import SearchPhotos from "./searchPhotos"

function App() {
  return (
    <div className="App">
     
 <div className="container">
        <h1 className="title">Unsplash Photos 🔥🚀</h1>
        <h5 className="para">Unsplash is a website dedicated to sharing stock photography under the Unsplash license.
        This project uses Unsplash API to get pictures.To make this work enter your <a href="" className="para">🔑</a></h5>
        
        <SearchPhotos /> 
        </div>
    </div>
  );
}
export default App;