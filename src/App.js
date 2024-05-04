import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Projects from "./sections/Projects";


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



function App() {
  
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
     <GlobalStyles />
     <ThemeProvider theme={dark} >
        {
          Loaded ? (
            <>
               <AnimatePresence>
                <Navigation />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Footer />
                <ScrollToTop />
              </AnimatePresence>
            </>
          ) : <Loader />
        }
     </ThemeProvider>
    </>
  );
}

export default App;
