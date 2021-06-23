import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Stacks from './components/pages/Stacks/Stacks';
import Experiences from './components/pages/Experiences/Experiences';
import ScrollToTop from './components/ScrollToTop';
import { Projects } from './components/pages/Experiences/data';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Stacks/>
      <Experiences data={Projects}/>
    </Router>
  );
}

export default App;
