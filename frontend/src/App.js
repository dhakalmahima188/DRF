import './App.css';
import React, { useState, useEffect } from "react";
function App() {

  const [data, setData] = useState();

useEffect(() => {
  fetch("http://127.0.0.1:8000/student/")
  .then((response) => response.json())
  .then((response) => console.log(response));

}, []);
  const  onClick = () => {
    console.log("Button clicked");
    }

  return (
    <div className="App">
      <header className="App-header">
       <button onClick={onClick()}>Data</button>
      </header>
    </div>
  );
}

export default App;
