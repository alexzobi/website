import React from 'react';
import styled from '@emotion/styled';
import {
  layout,
  LayoutProps,
  position,
  PositionProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  compose,
} from 'styled-system';

export const textStyleMap = {
  p1: '20px',
  p2: '18px',
  p3: '16px',
  p4: '14px',
  p5: '12px',
  p6: '10px',
  h1: '2em',
  h2: '1.5em',
  h3: '1.17em',
  h4: '1em',
  h5: '.83em',
  h6: '.67em'
}

interface BoxProps extends
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps {
  textStyle?: keyof typeof textStyleMap;
  children?: React.ReactNode;
}

const base =   compose(
  color,
  layout,
  position,
  space,
  flexbox,
  border,
)

const Box = styled.div<BoxProps>`
  font-family: American Typewriter;
  font-size: ${({ textStyle = 'p3'}: BoxProps) => textStyleMap[textStyle]};
  font-weight: ${({ textStyle = 'p3'}: BoxProps) => textStyle[0] === 'h' ?
  '600' : undefined};
  ${base}
`;

export default Box;