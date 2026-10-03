import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import About from './components/About';


function App() {
  const[darkMode, setDarkMode] = useState(false);
  return (
  <>
  
   <Navbar tittle="Zenvio Technologies" aboutText="About us"mode={darkMode}/> 

<div className="container my-3">
   <TextForm heading="Enter the text to analyze below"/>
</div> 

{/* <div className="container my-3">
   <About heading="About us"/>
</div> */}
  </>
);
}

export default App;
