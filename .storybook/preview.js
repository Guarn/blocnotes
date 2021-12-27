import React from 'react';
import { addDecorator } from "@storybook/react";
import TemplateWithTheme from '../src/stories/TemplateWithTheme';


addDecorator(story => (<TemplateWithTheme >{story()}</TemplateWithTheme>));

export const parameters = {
  layout: 'centered',
};