import i18next from 'i18next'

export function toggleLanguage(language) {
  i18next.changeLanguage(language);
}