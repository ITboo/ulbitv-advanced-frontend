import { Link, Route, Routes } from "react-router-dom";

import { HomeAsync } from "./components/Home.async";
import { AboutAsync } from "./components/About.async";
import { Suspense } from "react";

import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route index path="/" element={<HomeAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
