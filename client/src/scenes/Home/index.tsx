import React from 'react'
import Color from 'theme/color';
import Box from 'components/Box';
import Text from 'components/Text';
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

const Home = (): JSX.Element => (
  <Box
    bg={Color.dark.default}
    height={window.innerHeight}
    width="100%"
    alignItems="center"
    justifyContent="center"
    display="flex"
    flexDirection="column"
  >
    <Text
      textAlign="center"
      color={Color.light.default}
      fontSize="72px"
      textDecoration="underline"
    >
      Alex Sobiloff
    </Text>
    <Text textStyle="p2" color={Color.light.default}>
      software engineer. photographer. writer.
    </Text>
    <Box my={24} display="flex" justifyContent="space-between">
      {
        socialMediaIcons.map(({ icon, link }, idx) => (
          <Box
            ml={idx ? 12 : 0}
            onClick={() => window.open(link)}
          >
            <img src={icon} height="32" width="32"/>
          </Box>
        ))
      }
    </Box>
  </Box>
)

export default Home;