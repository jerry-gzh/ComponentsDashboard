//Fetch api data que da servicio a swapi.js

export function getPeople(){
  return fetch ('https://swapi.dev/api/people/')
    .then(res => res.json())
}