import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BtnRetourAccueilCpt from './BtnRetourAccueil';

const Template: ComponentStory<typeof BtnRetourAccueilCpt> = () => (
  <BtnRetourAccueilCpt />
);

export const BtnRetourAccueil = Template.bind({});

BtnRetourAccueil.storyName = 'Simple';

export default {
  title: 'UI/Spécifiques/BtnRetourAccueil',
  component: BtnRetourAccueil,
  decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
} as ComponentMeta<typeof BtnRetourAccueilCpt>;
