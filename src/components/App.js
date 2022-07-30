import './App.css';
import Home from './Home';
import Card from './Card';
import Smpage from './Smpage';
import Footer from './Footer';
import Navbar from './Navbar';
import Strategies from './Strategies';
import Services from './Services';
// import Details from './components/Details';
import Benefits from './Benefits';
import Working from './Working';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch as Switch,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    

    {/* <Switch>
   <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Plans">
            <Card />
          </Route> 
          <Route path="/Contact">
            <Contact />
          </Route> 
          </Routes> 
       </Switch> */}

{/* <Routes>
        <Route path="" element={<Home />} />
        <Route path="Plans/" element={<Card />} />
        <Route path="" element={<Services />} />
        <Route path="Plans/" element={<Strategies />} />
        <Route path="" element={<Card />} />
        <Route path="Plans/" element={<Card />} />
      </Routes> */}

 
   <div className='App'>
    {/* <Navbar/> */}
  <Home/>
   <Services/>
   <Smpage/>
   <Strategies/>
   <Working/>
   <Benefits/>
   <Card />
   <Footer/>
   </div>

  
   </>
  );
}

export default App;

