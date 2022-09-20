import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>  
        <Routes>
          <Route  path="/search" element={<SearchPage /> }>
            
          </Route>
          <Route path="/" element={<Home />}>
          
          </Route>
          </Routes>    
        </Router>

    </div>
  );
}

export default App;
//  // https://developers.google.com/custom-search/v1/using_rest