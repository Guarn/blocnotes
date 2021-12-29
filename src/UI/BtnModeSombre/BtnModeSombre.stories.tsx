import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BtnModeSombreCpt from './BtnModeSombre';

const Template: ComponentStory<typeof BtnModeSombreCpt> = ({ onClick }) => (
  <BtnModeSombreCpt onClick={onClick} />
);

export const BtnModeSombre = Template.bind({});

BtnModeSombre.storyName = 'Simple';

export default {
  title: 'UI/Spécifiques/BtnModeSombre',
  component: BtnModeSombre,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof BtnModeSombreCpt>;
