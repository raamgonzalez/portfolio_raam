import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.scss'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import globalEs from './data/translations/es/global.json'
import globalEn from './data/translations/en/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
