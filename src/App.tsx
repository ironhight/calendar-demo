import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//core components
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SideBar />
      </BrowserRouter>
    </>
  );
}

export default App;
