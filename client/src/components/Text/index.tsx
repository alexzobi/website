import React from 'react';
import styled from '@emotion/styled';
import {
  compose,
  typography,
  TypographyProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from 'styled-system'

import Color from '../../theme/color';
import { textStyleMap } from '../Box';
interface TextProps extends TypographyProps, ColorProps, SpaceProps {
  children: React.ReactNode;
  textStyle?: keyof typeof textStyleMap;
  textDecoration?: 'underline' | 'line-through' | 'overline' | 'underline overline';
  textIndent?: string;
}

const Text = styled.div`
  color: ${Color.light.default};
  text-decoration: ${({ textDecoration }: TextProps) => textDecoration};
  font-size: ${({ textStyle = 'p3'}: TextProps) => textStyleMap[textStyle]};
  font-weight: ${({ textStyle = 'p3'}: TextProps) => textStyle[0] === 'h' ?
  '600' : undefined};
  text-indent: ${({ textIndent = 0}) => textIndent};
  ${compose(typography, color, space)};
`;

export default Text;

