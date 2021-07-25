import React from 'react';
import styled from '@emotion/styled';

type LinkProps = React.HTMLProps<HTMLAnchorElement>

const Link = ({ href, ...props }: LinkProps) => (
  <a href={href} {...props} />
)

export default Link;