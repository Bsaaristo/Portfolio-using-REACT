import Home from "./pages/Home";
import Header from "./components/Header";
import MainDivs from "./components/MainDivs";
import { useState } from "react";

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }
  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <div>  <Header />
    <MainDivs />
    <Home />
    <additionBox />
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button></div>
  );
}

export default App;
