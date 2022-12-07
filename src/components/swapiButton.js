// Llamada a API mediante componente funcional, hooks: useState y useEffect 
// + Botón que muestra la lista a través del estado

import React, {useState, useEffect} from 'react';
import { getPeople } from '../services/getPeople';

function SwapiBtn() {

  const [list, setList] = useState([]);
  const [click, showList] = useState(false);

  useEffect(() => {
      if (click){
        getPeople()
        .then(items => {
          const { results } = items 
            setList(results)
        })
    }
    return
  })

return (
  <div className='Swapi'>
      <h1>People Star Wars</h1>
      <button id='btn' type='button' onClick={() => showList(true)}>Show People🤖</button>
      <ul>
        {list.map(result => <li key={result.name}>{result.name}</li>)}
      </ul>
  </div>
)
} 

export default SwapiBtn;