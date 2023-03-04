import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Beaches from "./component/beaches/Beaches";
import Birds from "./component/birds/Birds";
import Food from "./component/food/Food";
import Mountain from "./component/mountain/Mountain";
import Searchbar from "./component/searchbar/Searchbar";
import SearchedResult from "./component/searchresult/SearchedResult";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Searchbar />} />
          <Route path="/searchresult" element={<SearchedResult />} />
          <Route path="/mountain" element={<Mountain />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
