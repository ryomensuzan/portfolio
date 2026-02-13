import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Work from "./pages/Work"; 
import About from "./pages/About";
import Footer from './components/Footer';
import "./styles/App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-background">
          <Cursor />
          <div className="app-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}