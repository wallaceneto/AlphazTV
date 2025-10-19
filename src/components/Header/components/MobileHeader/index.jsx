import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContrastIcon from '@mui/icons-material/Contrast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from './MobileHeader.module.css'
import { ThemeContext } from '../../../../contexts'
import Button from '../../../../components/Button'
import { toggleTheme } from '../../lib'

const tabs = [
  { name: "Home", route: "/" },
  { name: "Songs", route: "/musicas" },
  { name: "Varieties", route: "/variedades" },
  { name: "About", route: "/sobre" },
];

export default function MobileHeader() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [headerOpen, setHeaderOpen] = useState(false);

  const getCurrentTab = () => {
    switch (currentPath) {
      case '/musicas':
        return t('Songs');
      case '/variedades':
        return t('Varieties')
      case '/sobre':
        return t('About')
      default:
        return t('Home')
    }
  }

  if (headerOpen) {
    return (
      <div className={styles.container}>
        <div className={styles.expandedBackground}>
          <div className={styles.mainTabContainer}>
            <Button onClick={() => toggleTheme(theme, setTheme)}>
              <ContrastIcon className={styles.icon} />
            </Button>

            <h4 className={styles.title}>
              {getCurrentTab()}
            </h4>

            <Button onClick={() => setHeaderOpen(false)}>
              <FontAwesomeIcon icon={faBars} className={styles.icon} />
            </Button>
          </div>

          {tabs.map((tab) =>
            tab.route !== currentPath &&
            <div key={tab.route}>
              <div className={styles.divider} />
              <div
                className={styles.secondaryTabContainer}
                onClick={() => navigate(tab.route)}
              >
                <h4 className={styles.title}>
                  {t(tab.name)}
                </h4>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.mainTabContainer}>
          <Button onClick={() => toggleTheme(theme, setTheme)}>
            <ContrastIcon className={styles.icon} />
          </Button>

          <h4 className={styles.title}>
            {getCurrentTab()}
          </h4>

          <Button onClick={() => setHeaderOpen(true)}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
}
