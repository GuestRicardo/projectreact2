import { useReducer, createContext } from 'react';
import './App.css';

//simulando os locais
//data.js
export const globalState = {
  title: 'Estado Complexo',
  body: 'o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos',
  counter: 0
};
//AppContext.js
export const Context = createContext();
export const AppContext = ({children })=>{
  return
}

function App() {
  return (
    <div>
      <h1>teste</h1>
      {/**este type é muito importante para action, e pode ser passado o quanto for preciso*/}

    </div>
  );
}
export default App;
