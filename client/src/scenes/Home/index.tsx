import React from 'react'
import Color from 'theme/color';
import Box from 'components/Box';
import Text from 'components/Text';

const Home = (): JSX.Element => (
  <Box
    bg={Color.dark.default}
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    display="flex"
    flex={1}
  >
    <Text
      textAlign="center"
      fontSize="72px"
      textDecoration="underline"
    >
      Alex Sobiloff
    </Text>
    <Text textAlign="center" textStyle="p2">
      software engineer. photographer. writer.
    </Text>
  </Box>
)

export default Home;