import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { translations } from './locales';

const i18nConfig = {
  debug: true,
  resources: translations,
  fallbackLng: 'pt-BR',
  defaultNS: 'path',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export const i18next = i18n;
