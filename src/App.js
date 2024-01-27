import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dictionary />
      </header>

      
    </div>
  );
}

export default App;
