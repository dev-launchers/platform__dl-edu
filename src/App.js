import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

import DarkHeader from "./main/DarkHeader";
import DarkFooter from "./main/DarkFooter";
import HomeScreen from "./home/HomeScreen";
import MainContent from "./main/MainContent";
import About from "./pages/About";
import GoogleAuthCallback from "./auth/GoogleAuthCallback";

import "./styles.css";
import classes from "./App.module.css";

import {bcModulesStore, testStore} from './store/state';
import Button from "@mui/material/Button";

function App() {

  const dollars = testStore((state) => state.dollars);
  const broke = testStore((state) => state.broke);
  const country = testStore((state) => state.country);
  const setBroke = testStore((state) => state.setBroke);
  const increaseDollars = testStore((state) => state.increaseDollars);
  const decreaseDollars = testStore((state) => state.decreaseDollars);

  const bcModules = bcModulesStore(state => state.bcModules); //all modules
  const currentModule = bcModulesStore(state => state.currentModule); //current module

  //bcModule CRUD functions
  const getModules = bcModulesStore(state => state.getModules); //Fetch bcModule data function
  const createModule = bcModulesStore(state => state.createModule);
  const updateModule = bcModulesStore(state => state.updateModule);
  const deleteModule = bcModulesStore(state => state.deleteModule);
  // const setCurrentModule = bcModulesStore(state => state.setCurrentModule);
  
  useEffect(() => {

    //TODO: Probably only need to call getModule() here and can delete the rest? Can then remove the return statement from getModules store
    const fetchModulesPromise = getModules().then(function (successfulReturnValue) {
      console.log("Success Promise Code Executing"); //When we see this run in the console, we know we have entered the successful (not failed) callback function of our promise.
      console.log(successfulReturnValue); //Here we can see the successful return value.
    });
    console.log(fetchModulesPromise); //In the web console, we can see this line executes and outputs 'Promise <state> pending' before the above console.logs execute (the contents of our success Promise callback).

  }, []); //Empty array here causese useEffect() to only run once. Can add variables in the array to run useEffect again when their value changes. If this useEffect function itself causes the variable to change, it will cause an infinite loop...

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"].join(","),
    },
    palette: {
      primary: {
        main: "#3a7ca5",
      },
      secondary: {
        main: "#ff7f0e",
        contrastText: "#ffffff",
      },
      neutral: {
        main: "#ffffff",
        contrastText: "#666666",
      },
      dark: {
        main: "#222222",
        contrastText: "#ffffff",
      },
      gray: {
        main: "#c4c4c4",
        contrastText: "#222222",
      },
      lightGray: {
        main: "#d8d8d8",
        contrastText: "#222222",
      },
      brightBlue: {
        main: "#0058DB",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.appWrapper}>

        {/* <p> You currently have: {dollars} </p>
        <p> {broke ? "You are broke" : "You are not broke"} </p>
        <p>You currently live in {country} </p>
        
        <Button onClick={() => { setBroke(!broke); }} > {" "} Change </Button>

        <Button onClick={() => { increaseDollars(); }} > + </Button>

        <Button onClick={() => { decreaseDollars(); }} > - </Button> */}

        <Button onClick={() => { getModules(); }} > Get Modules </Button>

        <Button onClick={() => { createModule(); }} > Create Module </Button>

        <Button onClick={() => { updateModule(currentModule.id); }} > Update Module </Button>

        <Button onClick={() => { deleteModule(currentModule.id); }} > Delete Module </Button>

        <Button onClick={() => { console.log(bcModules); }} > Log bcModules </Button>

        <Button onClick={() => { console.log(currentModule); }} > Log currentModule </Button>

        {/* <Button onClick={() => { setCurrentModule(3) }} > Set currentModule </Button> */}

        {/* <Button onClick={() => { deleteModule(5) }} > Delete Module with ID = 5 </Button> */}

        <DarkHeader />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/main-content/*" element={<MainContent />} />
          <Route path="/signup" element={<GoogleAuthCallback />} />
        </Routes>
        <DarkFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
