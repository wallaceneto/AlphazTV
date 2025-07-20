import './App.css'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1>Alphaz TV+</h1>
      <p>{t('Home')}</p>
      <p>{t('Songs')}</p>
      <p>{t('About')}</p>

      <button onClick={() => i18next.changeLanguage('pt-BR')}>
        Portugues
      </button>
      <br />
      <button onClick={() => i18next.changeLanguage('en-US')}>
        Ingles
      </button>
    </>
  )
}

export default App
