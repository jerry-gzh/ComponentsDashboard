import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // !
import Counter from './components/Counter';
import CounterD from './components/counterD';
import Post from './components/API';
import Swapi from './components/swapi'
import MyCard from './components/MyCard'
import SwapiBtn from './components/swapiButton'

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
      <div className='Post'>
        <Post/>
      </div>
      <>
        <Swapi/>
      </>
      <>
        <SwapiBtn/>
      </>
        <MyCard/>
    </div>
  );
}

export default App;
