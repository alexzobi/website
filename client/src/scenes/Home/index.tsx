import React from 'react'
import Color from 'theme/color';
import Box from 'components/Box';
import Text from 'components/Text';
import github from 'assets/svg/github.svg';
import facebook from 'assets/svg/facebook.svg';
import instagram from 'assets/svg/instagram.svg';
import book from 'assets/svg/book.svg';

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
    <Box my={24} display="flex" width="156px" justifyContent="space-between">
      <Box onClick={() => window.open('https://github.com/alexzobi')}>
        <img src={github} height="32" width="32"/>
      </Box>
      <Box onClick={() => window.open('https://facebook.com/asobiloff')}>
        <img src={facebook} height="32" width="32"/>
      </Box>
      <Box onClick={() => window.open('https://www.instagram.com/nathanaxephotography/')}>
        <img src={instagram} height="32" width="32"/>
      </Box>
      <Box onClick={() => window.open('https://www.lulu.com/search?adult_audience_rating=00&contributor=Alex+Sobiloff')}>
        <img src={book} height="32" width="32"/>
      </Box>
    </Box>
  </Box>
)

export default Home;