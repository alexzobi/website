import React from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import Box from 'components/Box';
import Color from 'theme/color';

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 6px;
  margin-right: 6px;
  a:active: {
    color: rgba(0,0,0,0.5);
  }
`;

const NavBar = (): JSX.Element => (
  <Box
    display="flex"
    margin="24px"
    justifyContent="flex-end"
  >

    <nav>
      <Box
        display="flex"
        justifyContent="flex-end"
        color={Color.light.default}
        borderBottomColor={Color.light.default}
        borderBottomWidth="2px"
        borderBottomStyle="solid"
      >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
      </Box>
    </nav>
  </Box>
)

export default NavBar;
