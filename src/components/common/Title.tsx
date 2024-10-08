import React from 'react';
import { ColorKey, Headingsize } from '../../style/theme';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  size: Headingsize;
  color?: ColorKey;
}

const Title = ({ children, size, color }: Props) => {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
};

const TitleStyle = styled.h1<Omit<Props, 'children'>>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;

export default Title;
