/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EntetePageCpt from './EntetePage';

const Template: ComponentStory<typeof EntetePageCpt> = ({ children }) => (
  <EntetePageCpt>{children}</EntetePageCpt>
);

export const EntetePage = Template.bind({});

EntetePage.args = { children: 'ENTETE' };

export default {
  title: 'UI/EntetePage',
  component: EntetePage,
} as ComponentMeta<typeof EntetePageCpt>;
