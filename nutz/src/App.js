
import './App.css';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import logo from"../src/assorts/NUTZLOGO.svg"
import home from "../src/assorts/nutzimage13.svg"
import batch from "../src/assorts/nutzimage15.svg"
import star from "../src/assorts/nutzimage16.svg"
import Home from './Home'
import {
  Routes,
   Route,
   BrowserRouter as Router
 } from "react-router-dom";
import MyDossier from './MyDossier';
import Enquiries from './Enquiries';
import Applications from './Applications';
import TextCreation from './TextCreation';


function App() {
  return (
    <Router>
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu style={{padding:"2%",margin:"2%",marginTop:"10%"}}>
         
          <MenuItem style={{marginBottom:"15%"}}> <img src={logo} alt="home" style={{ width: '40px', height: 'auto',color:"black" }} /></MenuItem>
          <MenuItem style={{marginBottom:"30%"}}> <div><img src={home} alt="home" style={{ width: '40px', height: 'auto',color:"black" }}/>
          <p style={{color:'white',margin:"0px",fontSize:'small'}}>HOME</p></div></MenuItem>
          <MenuItem style={{marginBottom:"30%"}}> <div><img src={batch} alt="home" style={{ width: '40px', height: 'auto',color:"black" }}/>
          <p style={{color:'white',margin:"0px",fontSize:'small'}}>Courses</p></div></MenuItem>
          <MenuItem style={{marginBottom:"30%"}}> <div><img src={star} alt="home" style={{ width: '40px', height: 'auto',color:"black" }}/>
          <p style={{color:'white',margin:"0px",fontSize:'small'}}>Events</p></div></MenuItem>
         
        </Menu>
      </Sidebar>
      <main style={{width:"100vw",backgroundColor: "rgb(240, 240, 240)"}}>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MyDossier" element={<MyDossier />} />
                <Route path="/Enquiries" element={<Enquiries />} />
                <Route path="/Applications" element={<Applications />} />
                <Route path="/TextCreation" element={<TextCreation />} />
            </Routes>
      </main>
     
    </div>
    </Router>
  );
}

export default App;
