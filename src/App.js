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
      <footer>
        This project was coded by
        <a href="https://www.linkedin.com/in/fonny-chandra-41b81970/">
          {" "}
          Fonny Chandra
        </a>
        , is open-source on{" "}
        <a href="https://github.com/fonnycode/dictionary-react"> Github</a>{" "}
        hosted on
        <a href="https://react-dictionary-apps.netlify.app/"> Netlify</a>
      </footer>
    </div>
  );
}

export default App;
