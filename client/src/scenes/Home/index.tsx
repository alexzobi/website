import React from 'react'
import Color from 'theme/color';
import Box from 'components/Box';
import Text from 'components/Text';

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
  </Box>
)

export default Home;