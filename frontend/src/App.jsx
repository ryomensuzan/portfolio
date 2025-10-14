// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor"; // Add this import
import Home from "./pages/Home";
import Work from "./pages/Work"; 
import About from "./pages/About";
import Footer from './pages/Footer';
import "./App.css";

export default function App() {
  return (
    <div className="app-background">
      <Cursor /> {/* Add the Cursor component */}
      <div className="app-content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}