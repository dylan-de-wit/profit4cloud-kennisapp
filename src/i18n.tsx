import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationNL from './locales/nl.json';

const resources = {
    en: {translation: translationEN},
    nl: {translation: translationNL}
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'nl',

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
