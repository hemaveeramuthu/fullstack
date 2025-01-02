import './App.css';
import ClassCompEg from "./Components/ClassComponent/ClassCompEg";
import Home from "./Components/FunctionComponent/Home";
import About from "./Components/FunctionComponent/About";
import Contact from "./Components/FunctionComponent/Contact";
import Gallery from "./Components/FunctionComponent/Gallery";
import NavBar from "./Components/FunctionComponent/NavBar";
import UseEffect from "./Components/FunctionComponent/UseEffect";
import UseRef from "./Components/FunctionComponent/UseRef";
import UseContext from "./Components/FunctionComponent/UseContext";
import UseMemo from "./Components/FunctionComponent/UseMemo";
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import Footer from "./Components/ClassComponent/Footer";
import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {            
  return (
    <div>
     
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/useeffect" element={<UseEffect/>}/>
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/usecontext" element={<UseContext/>}/>
        <Route path="/usememo" element={<UseMemo/>}/>

         </Routes>
        </BrowserRouter>
        
      
    </div>
  );
}

export default App;
