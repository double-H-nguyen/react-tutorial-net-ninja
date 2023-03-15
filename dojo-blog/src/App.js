import './App.css';
import Navbar from './Navbar';
import Home from './Home';

// this is a component
function App() {
  return (
    // JSX template
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// export component so we can use it in other files
export default App;
