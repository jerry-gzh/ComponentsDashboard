// Llamada a API mediante componente funcional, hooks: useState y useEffect

import React, {useState, useEffect} from 'react';
import { getPeople } from '../services/getPeople';

function Swapi() {

  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true; 
    getPeople()
      .then(items => {
        const { results } = items 
        if (mounted) {
          setList(results)
        }
      })
    return () => mounted = false;
  })

return (
  <div className='Swapi'>
      <h1>People Star Wars</h1>
      <ul>
        {list.map(result => <li key={result.name}>{result.name}</li>)}
      </ul>
  </div>
)
} 

export default Swapi;