import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './componentes/MiComponente';
import Peliculas from './componentes/Peliculas';

function HolaMundo(nombre, edad){
  // Esta variable nombre no es una string sino que un objeto de JSX
  var presentacion=  (
    <div>
      <h2>Hola, soy {nombre} </h2>
      <h3>Tengo {edad} años </h3>
    </div>);
  return presentacion;
}

function App() {

  var nombre= "Sebastian";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo
        </p>


        {HolaMundo(nombre, 21)}

        {alert("Hola Mundo")}

        <section className="componentes">
          <MiComponente />
          <Peliculas/>
        </section>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
