import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Navbar />
        <h1>WikiAndil, la plateforme collaborative</h1>
          <Tabs />
    </div>
  );
}

export default App;
