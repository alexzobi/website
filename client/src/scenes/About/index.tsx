import React from 'react';
import Text from '../../components/Text';
import Box from '../../components/Box';
import aboutText from './aboutText';

const About = (): JSX.Element => (
  <Box
  width={[ 1, 1/1.5, 1/3]}
  alignSelf="center"
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingX="24px"
    >
      <Text textStyle="h1" textDecoration="underline">
        About Me
      </Text>
      <Box mb="48px">
        {
          aboutText.split('\n').map(text => (
            <Text
              key={text}
              lineHeight="1.5em"
              textStyle="p3"
              mt="24px"
              textIndent="2em"
            >
              {text}
            </Text>
          ))
        }
      </Box>
    </Box>
  </Box>
);

export default About;
