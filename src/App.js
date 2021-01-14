import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import AboutMe from './components/pages/AboutMe/AboutMe';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <AboutMe/>
    </Router>
  );
}

export default App;
