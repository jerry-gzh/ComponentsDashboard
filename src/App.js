import './App.css';
import Counter from './components/Counter';
import CounterD from './components/counterD';
import Post from './components/API';

function App() {
  return (
    <div className='App'>
      <h1 className="boton">Prueba de componentes</h1>
      <div className="Counter"> Contador arrow function
        <Counter initCount={ 0 } className="Counter"/>
      </div>
      <div className="CounterD">
        <CounterD/>
      </div>
      <div>
        <Post/>
      </div>
    </div>
  );
}

export default App;