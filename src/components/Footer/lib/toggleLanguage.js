import i18next from 'i18next'

const toggleLanguage = (language) => {
  i18next.changeLanguage(language);
}

export { toggleLanguage }