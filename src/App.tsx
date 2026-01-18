import "./App.css";
import { Routes, Route } from "react-router";
import LogIn from "./pages/LogIn";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import MainLayout from "./pages/MainLayout";
import HeroBanner from "./pages/HeroBanner";
function App() {
  return (
    <>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/home" element={<Hero />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features" element={<HeroBanner/>}/>
          </Route>
        </Routes>
      {/* <h1>Hello World, that's a Disney Plus Clone! 🚀</h1> */}
    </>
  );
}

export default App;
