import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/home.component";
import Navigation from "./Routes/Navigation/navigation.component";
import Offers from "./Routes/offers/offers.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="offers" element={<Offers />} />
      </Route>
    </Routes>
  );
};

export default App;
