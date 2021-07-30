import React from 'react';
import Box from 'components/Box';
import github from 'assets/svg/github.svg';
import facebook from 'assets/svg/facebook.svg';
import instagram from 'assets/svg/instagram.svg';
import book from 'assets/svg/book.svg';
import linkedin from 'assets/svg/linkedin.svg';

const socialMediaIcons = [
  {
    icon: github,
    link: 'https://github.com/alexzobi',
  },
  {
    icon: linkedin,
    link: 'https://linkedin.com/in/asobiloff',
  },
  {
    icon: facebook,
    link: 'https://facebook.com/asobiloff',
  },
  {
    icon: instagram,
    link: 'https://www.instagram.com/nathanaxephotography/',
  },
  {
    icon: book,
    link: 'https://www.lulu.com/search?adult_audience_rating=00&contributor=Alex+Sobiloff',
  }
]

const Footer = (): JSX.Element => (
  <Box
    my={24}
    display="flex"
    justifyContent="space-between"
    width={[ 1/1.5, 1/3, 1/6]}
    alignSelf="center"
  >
  {
    socialMediaIcons.map(({ icon, link }, idx) => (
      <Box
        key={link}
        ml={idx ? 12 : 0}
        onClick={() => window.open(link)}
      >
        <img src={icon} height="32" width="32"/>
      </Box>
    ))
  }
  </Box>
);

export default Footer;