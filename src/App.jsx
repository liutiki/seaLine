import { NavbarComponent } from './shared/Components/Navbar/NavbarComponent';
import { TopContacts } from './Components/TopContacts/TopContacts';
import { MainTopBlock } from './Components/MainTopBlock/MainTopBlock';
import { AboutCompany } from './Components/AboutCompany/AboutCompany';
import { Service } from './Components/Service/Service';
import { Vessel } from './Components/Vessel/Vessel';
import { Footer } from './shared/Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Schedule } from './Components/Schedule/Schedule';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Policy }  from './Components/Politics/Policy';




function App() {


  return (

  <Router>
     
      <TopContacts />
     <NavbarComponent />
       <div className ="mainContent">
      <Routes>
        <Route path="/" element={
          <>
            <MainTopBlock />
            <Service />
            <AboutCompany />
            <Vessel />
            <Schedule />
          </>
        } />
        <Route path="/Policy" element={<Policy />} />
      </Routes>
    </div>
      <Footer />
    </Router>
  );
}
export default App;
