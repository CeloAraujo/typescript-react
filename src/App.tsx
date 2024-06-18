import React, { createContext } from "react";
import "./App.css";

// importando componente
import FirstComponent from "./components/FirstComponent";
import SecondComponente from "./components/SecondComponente";

// desestrututando props
import Destructuring, { Category } from "./components/Destructuring";

// usestate
import State from "./components/State";

// utilizando contexto
import Context from "./components/Context";

// Type
type textOrNull = string | null;
type fixed = "oi" | "tchau";

// context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

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

  // context
  const contextValue: IAppContext = {
    language: "TypeScript",
    framework: "React",
    projects: 3,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
