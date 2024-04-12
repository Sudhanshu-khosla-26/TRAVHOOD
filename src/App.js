import './App.css';
import Guide from './components/Guide';
import MidContent from './components/MidContent';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = ()=> {
  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
      <Route exact path='/TRAVHOOD/' element={<MidContent/>}></Route>
      <Route exact path='/TRAVHOOD/about' element={<About/>}></Route>
      <Route exact path='/TRAVHOOD/touristguides' element={<Guide/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
