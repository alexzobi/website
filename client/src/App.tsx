import React, { useState, useEffect } from 'react';
import Box from './components/Box';
import Home from './scenes/Home';
import About from './scenes/About';
import Color from 'theme/color';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App(): JSX.Element {
  const [height, setHeight] = useState(window.innerHeight);


  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("updating size", window.innerHeight)
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <Router>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        backgroundColor={Color.dark.default}
        minHeight={height}
        color={Color.light.default}
      >
       <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
      </Box>
    </Router>
  );
}
