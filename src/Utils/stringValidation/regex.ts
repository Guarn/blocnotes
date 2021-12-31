/** Caractères spéciaux */
export const specialChar = /[@#&"()[\]{}`$*€£%+=:/_\-§]/;

/** Accents langue française */
export const accents_FR = /[àâäéèêëîïôöùûüç]/i;

/** Texte simple (langue française) */
export const texte_FR = /^[\wàâäéèêëîïôöùûüç:'"/*+,()\-.0-9 ]*$/gi;

/** Email */
export const email = /^[\w\-.]+@[\w-]+\.+[\w-]{2,5}$/;

/** Nombres entiers */
export const nombreEntier = /^\d+$/;

/** Nombres réels */
export const nombreReel = /^[0-9]+[,.]{1}[0-9]+$/;

/** Utilisateur (sans espaces) */
export const utilisateur = /^[\w_-\d]+$/;

/** Mot de passe */
export const motDePasse = /^[\w_-\d@&#$%!]+$/;
