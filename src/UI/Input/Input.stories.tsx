import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputCpt from './Input';

const Template: ComponentStory<typeof InputCpt> = ({
  valeur,
  setValeur,
  placeholder = '',
  validation,
}) => (
  <InputCpt
    valeur={valeur}
    setValeur={(v) => {
      valeur = v;
    }}
    placeholder={placeholder}
  />
);

export const Input = Template.bind({});

Input.storyName = 'Simple';

export default {
  title: 'UI/Formulaires/Input',
  component: InputCpt,
  args: { options: { min: 3, max: 6, specialChar: true, frenchChar: true } },
} as ComponentMeta<typeof InputCpt>;
