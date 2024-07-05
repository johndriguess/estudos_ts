import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Estudos from './pages/Estudos';
import NavBar from './components/navbar/navbar';

function App() {

  return (
    <Router> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/estudos" element={<Estudos />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
