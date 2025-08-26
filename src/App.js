import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/* Navigation bar at the top */}
      <Navbar />
      <header className="App-header">      
      <h1 className="text-orange-500 8xl text-8xl font-extrabold">EduMap</h1>
       <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
