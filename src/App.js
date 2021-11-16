import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route, Redirect } from "react-router-dom";

import DarkLearnSection from "./home/DarkLearnSection";
import DarkBanner from "./home/DarkBanner";
import DarkHeader from "./main/DarkHeader";
import SideNav from "./main/SideNav";
import MainContent from "./main/MainContent";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./styles.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenuHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <DarkHeader userToggledMenu={toggleMenuHandler} checkIsOpen={isOpen}/>
      <SideNav checkIsOpen={isOpen}/>
    </>
  );
}

export default App;
