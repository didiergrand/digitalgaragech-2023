import { htmlToText } from 'html-to-text'; // Importez un package de conversion HTML vers texte

export const removeHTMLTags = (html) => {
  // Convertir le texte propre en HTML brut pour remplacer tous les caractères HTML
  const plainText = htmlToText(html, {
    wordwrap: false,
    preserveNewlines: true,
  });

  return plainText;
};
  
