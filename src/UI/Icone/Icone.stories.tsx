import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconeCpt from './Icone';
import * as ListeIconeCpt from './ListeIcones';
import { NomIcones, TailleIcone } from './interfaces';
import { Transition } from '../../Shared/css/pageStyles';

const listeIcones = Object.keys(ListeIconeCpt) as NomIcones[];

const CtnGlobal = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5% 20%;
`;

const CtnIcone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Span = styled.span`
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.border.assombri};
  background-color: ${({ theme }) => theme.body.assombri};
  padding: 5px;
  ${Transition}
`;

const TemplateSimple: ComponentStory<typeof IconeCpt> = ({
  onClick,
  icone,
  size,
  couleurPrincipale,
  couleurSecondaire,
  options,
}) => (
  <IconeCpt
    onClick={onClick}
    icone={icone}
    options={options}
    size={size}
    couleurPrincipale={couleurPrincipale}
    couleurSecondaire={couleurSecondaire}
  />
);

export const Simple = TemplateSimple.bind({});
Simple.args = { icone: 'BlocNotes' };
Simple.storyName = 'Simple';

export const Rotation = TemplateSimple.bind({});
Rotation.args = {
  icone: 'BlocNotes',
  options: { rotation: { initial: 0, onHover: 180 } },
};
Rotation.storyName = 'Rotation (onHover)';

export const RotationAnimee = TemplateSimple.bind({});
RotationAnimee.args = {
  icone: 'Calculette',
  options: {
    rotation: { initial: 0, onHover: 180 },
    isAnimated: true,
    animationDuration: 0.5,
  },
};
RotationAnimee.storyName = 'Rotation animée (onHover)';

export const Zoom = TemplateSimple.bind({});
Zoom.args = {
  icone: 'BlocNotes',
  options: { zoom: { initial: 1, onHover: 1.2 } },
};
Zoom.storyName = 'Zoom (onHover)';

export const ZoomAnime = TemplateSimple.bind({});
ZoomAnime.args = {
  icone: 'Calculette',
  options: {
    zoom: { initial: 1, onHover: 1.2 },
    isAnimated: true,
    animationDuration: 0.2,
  },
};
ZoomAnime.storyName = 'Zoom animé (onHover)';

export const Position = TemplateSimple.bind({});
Position.args = { icone: 'Calculette', options: { bottom: 25, right: 120 } };
Position.storyName = 'Position absolue';

const TemplateListe: ComponentStory<typeof IconeCpt> = ({
  onClick,
  options,
  size,
  couleurPrincipale,
  couleurSecondaire,
}) => (
  <CtnGlobal>
    {listeIcones.map((iconeEx, i) => (
      <CtnIcone key={i}>
        <IconeCpt
          onClick={onClick}
          icone={iconeEx}
          options={options}
          size={size}
          couleurPrincipale={couleurPrincipale}
          couleurSecondaire={couleurSecondaire}
        />
        <Span>{iconeEx}</Span>
      </CtnIcone>
    ))}
  </CtnGlobal>
);

export const Icone = TemplateListe.bind({});
Icone.storyName = 'Liste';

export default {
  title: 'UI/Icône',
  component: Simple,
  argTypes: {
    onClick: { action: 'clicked' },
    icone: {
      options: listeIcones,
      control: { type: 'select' },
    },
    size: { options: Object.keys(TailleIcone), control: { type: 'select' } },
  },
  args: { size: 'extralarge', couleurPrincipale: 'orange' },
} as ComponentMeta<typeof IconeCpt>;
