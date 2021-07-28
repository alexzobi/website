import React from 'react';
import styled from '@emotion/styled';
import {
  compose,
  typography,
  TypographyProps,
  color,
  ColorProps,
} from 'styled-system'

import { textStyleMap } from '../Box';

interface TextProps extends TypographyProps, ColorProps {
  children: React.ReactNode;
  textStyle?: keyof typeof textStyleMap;
  textDecoration?: 'underline' | 'line-through' | 'overline' | 'underline overline';
}

const Text = styled.div`
text-decoration: ${({ textDecoration }: TextProps) => textDecoration};
font-size: ${({ textStyle = 'p3'}: TextProps) => textStyleMap[textStyle]};
font-weight: ${({ textStyle = 'p3'}: TextProps) => textStyle[0] === 'h' ?
'600' : undefined};
${compose(typography, color)};
`;

export default Text;

