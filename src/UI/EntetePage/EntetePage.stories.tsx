import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EntetePageCpt from './EntetePage';

const Template: ComponentStory<typeof EntetePageCpt> = ({ children }) => (
  <EntetePageCpt>{children}</EntetePageCpt>
);

export const EntetePage = Template.bind({});

EntetePage.args = { children: 'entête' };
EntetePage.storyName = 'Simple';

export default {
  title: 'UI/Spécifiques/EntetePage',
  component: EntetePage,
} as ComponentMeta<typeof EntetePageCpt>;
