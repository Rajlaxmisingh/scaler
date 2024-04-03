import './App.css';import Navbar from './components/Navbar'
import Home from './pages/Home';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar/>
     <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
      </div>
    </Router>
      
    
  );
}

export default App;
