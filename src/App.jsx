import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Developers from "./Pages/Developers";
import AgentDescription from "./Pages/AgentDescription";
import ConfigDescription from "./Pages/ConfigDescription";
import PropertyDescription from "./Pages/PropertyDescription";
import LocalityDescription from "./Pages/LocalityDescription";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/property-description" element={<PropertyDescription />} />
        <Route path="/config-description" element={<ConfigDescription />} />
        <Route path="/agent-description" element={<AgentDescription />} />
        <Route path="/locality-description" element={<LocalityDescription />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
