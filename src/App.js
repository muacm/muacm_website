import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Views/Home";
import Team from "./Views/Team";
import './Styles/main.css';

const App = () => {
  return (
    <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/team" exact component={Team} />
      </Router>
    </div>
  )
}

export default App
