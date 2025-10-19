import moment from "moment/moment"
import 'moment/locale/pt-br'

const translateBirthDate = (birthdate, t, i18n) => {
  const birth = birthdate.split(':')

  switch (i18n.language) {
    case 'en-US':
      moment.locale('en')
      break;
    case 'pt-BR':
      moment.locale('pt-br')
      break;
    default:
      moment.locale('en')
      break;
  }

  return t(birth[0]) + ' ' + moment(birth[1]).format('LL')
}

export { translateBirthDate }