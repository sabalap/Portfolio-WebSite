import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import Contact from "./pages/ContactPage";
import Projects from "./pages/ProjectsPage";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <AnimatePresence>
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
      </AnimatePresence>
      <Footer />
    </Router>
  )
}

export default App;
