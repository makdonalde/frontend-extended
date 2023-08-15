import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./index.scss";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
export const App = () => {
  return (
    <div>
      <Link to={"about"}>About</Link>
      <Link to={""}>Home</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
