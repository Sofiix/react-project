import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavbarStore } from '../store/navbarStore';
const Footer = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
  const { t } = useTranslation();
  return (
    <footer className='flex flex-row items-center justify-between px-8 text-sm text-app-gray-700 bg-app-background-main'>
      <span>
        © 2023 Debsoft. All Rights Reserved. 
      </span>
      <ul className='flex gap-11'>
        <NavLink
          to='/marketplace'
          onClick={() => {
            selectedItemNavbar(2);
          }}
          className={navbarItemActive === 2 ? 'underline' : 'no-underline'}
        >
          Creado por: Sofia Rivadeneira
        </NavLink>
        <li>{t('licence')}</li>
        <li>{t('termUse')}</li>
        <li>Blog</li>
      </ul>
    </footer>
  );
};

export default Footer;
