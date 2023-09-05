import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Carousel from "./Components/Carousel/Carousel";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import AnimatedCursor from "./Components/Cursor/AnimatedCursor";
function App() {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? 'black':'',
      color:darkMode? 'white':''
  }}
    >
      <AnimatedCursor/>
      <Navbar />
      <Intro/>
      <Services />
      <Experience />
      <Works/>
      <Portfolio />
      {/* <Carousel /> */}
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
