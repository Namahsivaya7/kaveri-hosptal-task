import React from "react";
import { DashboardProvider } from "./context/DashboardContext";
import "./App.css";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <DashboardProvider>
      <Dashboard/>
    </DashboardProvider>
  );
};

export default App;
