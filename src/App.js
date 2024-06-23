import React from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import './App.css';
import { router } from "./components/router";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);


  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


