import './App.css';
import ClassCompEg from "./Components/ClassComponent/ClassCompEg";
import Home from "./Components/FunctionComponent/Home";
import About from "./Components/FunctionComponent/About";
import Contact from "./Components/FunctionComponent/Contact";
import Gallery from "./Components/FunctionComponent/Gallery";
import NavBar from "./Components/FunctionComponent/NavBar";
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import Footer from "./Components/ClassComponent/Footer";
import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Footer />
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>

         </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
