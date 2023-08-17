import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Recommended from "./components/Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchpage from "./components/Searchpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="appPage">
                <Sidebar />
                <Recommended />
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <div className="appPage">
                <Sidebar />
                <Searchpage />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
