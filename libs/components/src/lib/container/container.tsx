import React from 'react';
import styled from 'styled-components';
import { Sizing } from '@types';
import { getContainerStyles } from '@styles';

export interface ContainerProps {
  stack?: Sizing
  padding?: Sizing
  paddingLeftRight?: Sizing
  paddingTopBottom?: Sizing
  children: React.ReactNode
}

const StyledContainer = styled.div<ContainerProps>`
  ${getContainerStyles}
`;

export function Container({ children, ...otherProps}: ContainerProps) {
  return (
    <StyledContainer {...otherProps}>
      {children}
    </StyledContainer>
  );
}

export default Container;
