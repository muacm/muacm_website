import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Views/Home";
import Team from "./Views/Team";
import Events from "./Views/Events";
import Blogs from "./Views/Blogs";
import './Styles/main.css';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/team" exact component={Team} />
          <Route path="/events" exact component={Events} />
          <Route path="/blog" exact component={Blogs} />
      </Router>
    </div>
  )
}

export default App;
