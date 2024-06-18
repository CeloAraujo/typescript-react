import React from "react";
import "./App.css";

function App() {
  // variaveis
  const name: string = "marcelo";
  const age: number = 24;
  const isWorking: boolean = false;

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>nome: {name}</h2>
      <p>idade: {age}</p>
      {!isWorking && <p>Não está trabalhando ainda...</p>}
    </div>
  );
}

export default App;
