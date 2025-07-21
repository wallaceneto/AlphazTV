import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enUs from './en-us.json'
import ptBr from './pt-br.json'

export default i18n.use(LanguageDetector).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt-BR',
  resources: {
    'en-US': enUs,
    'pt-BR': ptBr,
  },
});