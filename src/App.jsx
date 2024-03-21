import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Developers from "./Pages/Developers";
import AgentDescription from "./Pages/AgentDescription";
import ConfigDescription from "./Pages/ConfigDescription";
import PropertyDescription from "./Pages/PropertyDescription";
import LocalityDescription from "./Pages/LocalityDescription";
import HousesDetail from "./Pages/HousesDetail/HousesDetail";

function App() {
  const [ selectedHome, setSelectedHome ] = useState({});
  const [ filterHomesList, setFilterHomesList ] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home setSelectedHome={setSelectedHome} setFilterHomesList={setFilterHomesList} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/property-description" element={<PropertyDescription />} />
        <Route path="/config-description" element={<ConfigDescription />} />
        <Route path="/agent-description" element={<AgentDescription />} />
        <Route path="/locality-description" element={<LocalityDescription />} />
        <Route path="/houses-details" element={<HousesDetail selectedHome={selectedHome} filterHomesList={filterHomesList} setSelectedHome={setSelectedHome} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
