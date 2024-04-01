import "./App.css";
import { useEffect, useState } from "react";
import { updateAuth, updateFavouriteHouses } from "./Features/Features";
import { Routes, Route, Outlet } from "react-router-dom";
import { useCookies } from 'react-cookie';

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Developers from "./Pages/Developers";
import AgentDescription from "./Pages/AgentDescription";
import ConfigDescription from "./Pages/ConfigDescription";
import PropertyDescription from "./Pages/PropertyDescription";
import LocalityDescription from "./Pages/LocalityDescription";
import HousesDetail from "./Pages/HousesDetail/HousesDetail";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteHousesByUser } from "./Api/api";
import Profile from "./Pages/Account/Profile";
import Wishlist from "./Pages/Account/Wishlist";
import Reviews from "./Pages/Account/Reviews";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [ selectedHome, setSelectedHome ] = useState({});
  const [ filterHomesList, setFilterHomesList ] = useState("");
  const [ cookies ] = useCookies(['auth']);
  const authToken = cookies.auth;
  if(authToken){
    dispatch(updateAuth(true));
  };
  useEffect(() => {
    const fn_favHouses = async() => {
      const result = await getFavouriteHousesByUser();
      if(result?.status === 200){
        dispatch(updateFavouriteHouses(result?.data?.message?.housesId));
      }
    };
    fn_favHouses();
  }, [auth]);
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
        
        {auth ? (
          <>
            <Route path="/account" element={<Profile />} />
            <Route path="/account/wishlist" element={<Wishlist />} />
            <Route path="/account/reviews" element={<Reviews />} />
            <Route path="/houses-details" element={<HousesDetail selectedHome={selectedHome} filterHomesList={filterHomesList} setSelectedHome={setSelectedHome} />} />
          </>
        ) : (
          <Route path="/*" element={<Home setSelectedHome={setSelectedHome} setFilterHomesList={setFilterHomesList} />} />
        )}
        </Routes>
      <Footer />
    </>
  );
}

export default App;
