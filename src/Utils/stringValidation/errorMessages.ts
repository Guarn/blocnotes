import { ErrorMessages } from './interfaces';

export const errorMessages: ErrorMessages = {
  accents_FR: "Ne doit pas contenir d'accents",
  email: 'Format du courriel incorrect',
  nombreEntier: "N'est pas un nombre entier",
  nombreReel: "N'est pas un nombre réel",
  specialChar: 'Ne doit pas contenir de caractères spéciaux',
  texte_FR: 'Ne doit pas contenir de caractères spéciaux',
  utilisateur:
    "Caractères alphanumériques sans accents, '-', ou '_' uniquement",
  min: 'Minimum # caractères',
  max: 'Moins de # caractères',
  required: 'Ce champ est obligatoire',
  motDePasse:
    "Caractères alphanumériques sans accents, '@', '#', '&', '$', '%', '!', '-', ou '_' uniquement",
};
