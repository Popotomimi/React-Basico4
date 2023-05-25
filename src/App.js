import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      <div>
        {/* CSS de componente */}
        <MyComponent/>
      </div>
      <p>Este paragrafo é do App.js</p>
      <p className="my-comp-paragraph">Este tbm é do componente</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", backgroundColor: "yellow"}}>
        Este elemento foi estilizado de forma inline.
      </p>
      {/* CSS Inline style Dinâmico */}
      <p style={n < 10 ? ({color:"purple"}) : ({color: "brown"})}>
        CSS Dinâmico
      </p>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "black-title" }>
      Este titulo vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
