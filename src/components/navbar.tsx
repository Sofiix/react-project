import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
  const titleLogo = dataNavbar(navbarItemActive).logo.title.split(' ');
  const { t } = useTranslation();

  return (
    <nav className='flex flex-col min-w-[250px] bg-app-white'>
      <NavLink to='/'>
        <h1 className='py-14 border-b text-center text-app-blue-dark text-[1.625rem] border-app-gray-100'>
          <span className='font-bold'>{titleLogo[0]}</span>
          <span className='ml-2 font-light'>{titleLogo[1]}</span>
        </h1>
      </NavLink>
      <ul className='flex flex-col gap-y-6 pt-10 pl-8'>
        {dataNavbar(navbarItemActive).nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className='flex flex-row items-center text-app-gray-700'
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            {item.icon}
            <span
              className={`ml-3 text-base font-medium ${
                item.id === navbarItemActive
                  ? 'text-app-primary'
                  : 'text-app-gray-700'
              }`}
            >
              {item.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
