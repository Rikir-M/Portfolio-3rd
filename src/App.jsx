import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Credits from "./pages/Credits";
import Resume from "./pages/Resume";
import { useEffect, useState } from "react";
import NotResponsive from "./components/NotResponsive";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    checkScreen(); // Check on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isSmallScreen) {
    return <NotResponsive />;
  }

  return (
    <div className="app 100vh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-rikir" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
