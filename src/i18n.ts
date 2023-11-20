import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Multi-language app',
        termUse: 'Terms of Use',
        licence: 'Licence',
        marketplace: 'Marketplace',
        navbarDashboard : 'Dashboard', 
        navbarMarketplace : 'Marketplace', 
        navbarContactar : 'Contact Support', 
        navbarTickets : 'Tickets', 
        navbarSigin : 'Sigin', 
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        termUse: 'Términos de uso',
        licence: 'Licencia',
        marketplace: 'Tienda',
        navbarDashboard : 'Inicio',
        navbarMarketplace : 'Tienda', 
        navbarContactar : 'Contactar Soporte', 
                navbarTickets : 'Tickets', 
        navbarSigin : 'Unirse',
      },
    },
  },
});

export default i18n;
