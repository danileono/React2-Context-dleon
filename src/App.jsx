import React from "react";
import './App.css'
import Router from "./router/Router";
import GlobalProvider from "./context/GlobalContext";
import Search from "./components/Search";

const PHOTO_URL = "/photos.json";



const App = () => {
  return (
    <>
    
    <GlobalProvider>
    <Router />
    </GlobalProvider>

    </>
  );
};
export default App;
