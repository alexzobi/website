import React from 'react';
import styled from '@emotion/styled';

import Color from 'theme/color';

type Props = {
  color: string;
  children: React.ReactNode;
}

const StyledText = styled.div<{color: string}>`
  color: ${({ color }) => color};
`;

const Text = ({ color = Color.dark.default, children }: Props) => (
  <StyledText color={color} children={children}/>
)

export default Text;

