// import i18n from "i18next";
// import languageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

import i18n from 'i18next'
// import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome!",
        },
      },
      ukr: {
        translation: {
          greeting: "Привіт, Ласкаво просимо!",
        },
      },
    },
  });
