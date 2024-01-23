import logo from "./logo.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DICTIONARY</h1>
        <button className="btn btn-primary">search</button>
      </header>
    </div>
  );
}

export default App;
