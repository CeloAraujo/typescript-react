import React from "react";
import "./App.css";

// importando componente
import FirstComponent from "./components/FirstComponent";
import SecondComponente from "./components/SecondComponente";


// desestrututando props
import Destructuring from "./components/Destructuring";
import State from "./components/State";

// usestate

function App() {
  // variaveis
  const name: string = "marcelo";
  const age: number = 24;
  const isWorking: boolean = false;

  // funções
  const useGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>nome: {name}</h2>
      <p>idade: {age}</p>
      {!isWorking && <p>Não está trabalhando ainda...</p>}
      <h3>{useGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponente name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Conteúdo"
        commentQty={14}
        tags={["ts", "js"]}
      />
      <State/>

    </div>
  );
}

export default App;
