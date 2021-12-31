import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputCpt from './Input';

const Template: ComponentStory<typeof InputCpt> = ({
  valeur,
  setValeur,
  placeholder,
  validation,
}) => (
  <InputCpt
    valeur={valeur}
    setValeur={setValeur}
    placeholder={placeholder}
    validation={validation}
  />
);

export const Simple = Template.bind({});

Simple.storyName = 'Simple';
Simple.args = {
  placeholder: 'Un exemple de placeholder',
};

export const Email = Template.bind({});

Email.storyName = 'Email';
Email.args = {
  valeur: 'flo@bidule.com',
  validation: { type: 'email' },
};

export const Password = Template.bind({});

Password.storyName = 'Password';
Password.args = {
  valeur: '$Abr@C@daBrA!',
  validation: { type: 'mot de passe' },
};

export default {
  title: 'UI/Formulaires/Input',
  component: InputCpt,
  argTypes: {
    setValeur: { action: 'SetValeur' },
  },
} as ComponentMeta<typeof InputCpt>;
