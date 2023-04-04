import React from "react";
import Navbar from './Components/Navbar';
import AllRouter from './MainRoute/AllRoutes';
import './App.css';

function App() {
  const [dark,setDark]=React.useState(false);
  return (
    <div className="App">
      <Navbar Dark={dark} setDark={setDark}/>
      <AllRouter Dark={dark}/>
    </div>
  );
}

export default App;
