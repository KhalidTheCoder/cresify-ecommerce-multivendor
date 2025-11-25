/**
 * @file getDictionary.js
 * @description Server-side async utility that loads the locale-specific translation dictionary.
 * @module lib/getDictionary
 */

import en from '@/locales/en.json';
import es from '@/locals/es.json';

export const getDictionary = (locale) => {
  if (locale === 'es') return es;
  return en; // default
};
