import { useTranslation } from 'react-i18next';
import { BsFillClipboardDataFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaHouse,
  FaCartShopping,
  FaGaugeHigh,
  FaLock,

} from 'react-icons/fa6';

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

type NavItemType = {
  id: number;
  title: string;
  icon: JSX.Element;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
  };
  nav: NavItemType[];
};

type LanguageType = {
  label: string;
  code: string;
};

export const dataNavbar = (navItem: number): NavbarType => {
  const { t } = useTranslation();
  return {


    logo: {
      title: 'Debsoft Soporte ',
          },
    nav: [
      {
        id: 1,
        title: t('navbarDashboard'),
        icon: (
          <FaHouse
            className={navItem === 1 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
          />
        ),
        to: '/',
      },
      {
        id: 2,
        title: t('navbarMarketplace'),
        icon: (
          <FaCartShopping
            className={navItem === 2 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
          />
        ),
        to: '/marketplace',
      },
      {
        id: 3,
        title: t('navbarContactar'),
        icon: (
          <BsFillTelephoneFill
            className={navItem === 3 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
          />
        ),
        to: '/contactar',
      },
      /* {
        id: 4,
        title: t('navbarKanban'),
        icon: (
          <FaGaugeHigh
            className={navItem === 4 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
          />
        ),
        to: '/kanban',
      }, */
      {
        id: 5,
        title: t('navbarTickets'),
        icon: (
          <BsFillClipboardDataFill          
            className={navItem === 5 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
          />
        ),
        to: '/tickets',
      },
      {
        id: 6,
        title: t('navbarSigin'),
        icon: (
          <FaLock
            className={navItem === 6 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
          />
        ),
        to: '/signIn',
      },
    ],
  }
};

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' },
];

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
