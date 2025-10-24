import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enUs from './en-us.json'
import ptBr from './pt-br.json'
import es from './es.json'

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
    resources: {
      'en': enUs,
      'en-US': enUs,
      'pt': ptBr,
      'pt-BR': ptBr,
      'es': es,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });