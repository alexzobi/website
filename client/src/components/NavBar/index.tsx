import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import Color from 'theme/color';
import Box from 'components/Box';
import menu from 'assets/svg/menu.svg';

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-top: 12px;
  text-align: right;
  &:active {
    color: ${Color.light.default}75;
  }
`;

const MenuWrapper = styled(Box)`
.rotate-left {
  animation: rotate-left-keyframes 0.5s;
 }

 @keyframes rotate-left-keyframes {
  from {
   transform: rotate(0deg);
  }

  to {
   transform: rotate(180deg);
  }
 }
.rotate-right {
  animation: rotate-right-keyframes 0.5s;
 }

 @keyframes rotate-right-keyframes {
  from {
   transform: rotate(0deg);
  }

  to {
   transform: rotate(-180deg);
  }
 }
`;

const NavBar = (): JSX.Element => {
  const [ expanded, setExpanded ] = useState(false);

  return (
    <Box
      alignSelf="flex-end"
      margin="24px"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <MenuWrapper>
        <img className={expanded ? 'rotate-left' : 'rotate-right'} src={menu} />
      </MenuWrapper>
      <Box
        position="absolute"
        right={24}
      >
        {
          expanded && (
            <nav>
              <Box
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
              </Box>
            </nav>
          )
        }
        </Box>
      </Box>
  )
}

export default NavBar;
