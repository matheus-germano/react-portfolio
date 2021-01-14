import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Stacks from './components/pages/Stacks/Stacks';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Stacks/>
    </Router>
  );
}

export default App;
