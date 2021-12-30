import React from 'react';
import { addDecorator } from "@storybook/react";
import TemplateWithTheme from '../src/StoryBook/TemplateWithTheme';


addDecorator(story => (<TemplateWithTheme >{story()}</TemplateWithTheme>));

export const parameters = {
  controls: { expanded: true }
};