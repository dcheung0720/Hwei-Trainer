import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation'
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
          <HomePage></HomePage>
      </header>
    </div>
  );
}

export default App;
