import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputCpt from './Input';

const Template: ComponentStory<typeof InputCpt> = ({
  valeur,
  setValeur,
  label,
  placeholder,
  validation,
  obligatoire,
}) => (
  <InputCpt
    valeur={valeur}
    label={label}
    setValeur={setValeur}
    placeholder={placeholder}
    validation={validation}
    obligatoire={obligatoire}
  />
);

export const Simple = Template.bind({});

Simple.storyName = 'Simple';
Simple.args = {
  placeholder: 'Un exemple de placeholder',
  label: 'Exemple',
  obligatoire: true,
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
