import "./App.css";
import { Routes, Route } from "react-router";
import LogIn from "./pages/LogIn";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import MainLayout from "./pages/MainLayout";
import HeroBanner from "./pages/HeroBanner";
import Devices from "./pages/Devices";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features" element={<HeroBanner />} />
          <Route path="/features" element={<Devices />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/footer" element={<Footer/>}/>
        </Route>
      </Routes>
      {/* <h1>Hello World, that's a Disney Plus Clone! 🚀</h1> */}
    </>
  );
}

export default App;
