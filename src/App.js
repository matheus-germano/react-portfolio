import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Stacks from './components/pages/Stacks/Stacks';
import Experiences from './components/pages/Experiences/Experiencies';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Stacks/>
      <Experiences/>
    </Router>
  );
}

export default App;
