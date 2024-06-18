import React from "react";
import "./App.css";

// importando componente
import FirstComponent from "./components/FirstComponent";
import SecondComponente from "./components/SecondComponente";

// desestrututando props
import Destructuring, { Category } from "./components/Destructuring";

// usestate
import State from "./components/State";
// Type
type textOrNull = string | null;
type fixed = "oi" | "tchau";

function App() {
  // variaveis
  const name: string = "marcelo";
  const age: number = 24;
  const isWorking: boolean = false;

  // funções
  const useGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // type
  const myText: textOrNull = "Algum texto por aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "Hello World";

  const testandoFixed: fixed = "oi";

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
        category={Category.TS}
      />
      <State />
      {myText && <p>Tem texto na variavel</p>}
      {mySecondText && <p>Tem texto na variavel 2</p>}
    </div>
  );
}

export default App;
