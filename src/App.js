import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import Contact from "./pages/ContactPage";
import Projects from "./pages/ProjectsPage";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
