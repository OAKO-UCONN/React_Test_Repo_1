import logo from './logo.svg';
import './App.css';

const {REACT_APP_TEST_TEXT, REACT_APP_TEST_TEXT1} = process.env;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>TEST</h1>
        <h1>{REACT_APP_TEST_TEXT}</h1>
        <h1>{REACT_APP_TEST_TEXT1}</h1>
      </header>
    </div>
  );
}

export default App;
