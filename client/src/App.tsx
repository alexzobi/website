import React from 'react';
import logo from './logo.svg';
import './App.css';

import Color from 'theme/color';
import Box from 'components/Box';
import Text from 'components/Text';
import Link from 'components/Link';

function App() {
  return (
    <Box className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text color={Color.light.default}>
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </Box>
  );
}

export default App;
