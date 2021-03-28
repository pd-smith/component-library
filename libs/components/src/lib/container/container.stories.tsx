import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Container, ContainerProps } from './container';

export default {
  component: Container,
  title: 'Container',
  decorators: [withKnobs],
};

export const primary = () => {

  const props: ContainerProps = {
    stack: select('stack', ['none', 'small', 'medium', 'large', 'huge'], 'small'),
    padding: select('padding', ['none', 'small', 'medium', 'large', 'huge'], 'none'),
    paddingTopBottom: select('paddingTopBottom', ['none', 'small', 'medium', 'large', 'huge'], undefined),
    paddingLeftRight: select('paddingLeftRight', ['none', 'small', 'medium', 'large', 'huge'], undefined),
    children: text('children', 'What up?')
  };

  return (
    <>
      <Container {...props} />
      <div>Hello</div>
    </>
  );
};
