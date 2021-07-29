import React, { useState, useEffect } from 'react';
import Box from './components/Box';
import Home from './scenes/Home';
import Color from 'theme/color';
import NavBar from 'components/NavBar';
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
        flexDirection="column"
        backgroundColor={Color.dark.default}
        height={height}
        color={Color.light.default}
      >
       <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
