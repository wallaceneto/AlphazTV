import moment from "moment/moment"
import 'moment/locale/pt-br'
import 'moment/locale/es'

const translateBirthDate = (birthdate, t, i18n) => {
  const birth = birthdate.split(':')

  console.log(i18n.language);


  switch (i18n.language) {
    case 'en-US':
      moment.locale('en')
      break;
    case 'pt-BR':
      moment.locale('pt-br')
      break;
    case 'es':
      moment.locale('es')
      break;
    default:
      moment().calendar()
      break;
  }

  return t(birth[0]) + ' ' + moment(birth[1]).format('LL')
}

export { translateBirthDate }