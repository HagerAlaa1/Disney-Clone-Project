import "./App.css";
import { Routes, Route } from "react-router";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
    </Routes>
      {/* <h1>Hello World, that's a Disney Plus Clone! 🚀</h1> */}
    </>
  );
}

export default App;
