import React from 'react';
import './App.css';
import RepoList from "./components/RepoList";
import Index from "./pages/Index";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style="margin-right: 20px">Main</Link>
                          
                            <Link to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
