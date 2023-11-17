import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const SubmitViolations = lazy(() => import('../pages/submitViolations'));
const Whitelist = lazy(() => import('../pages/whitelist'));
const Billing = lazy(() => import('../pages/billing'));
const Affiliate = lazy(() => import('../pages/affiliateProgram'));
const Settings = lazy(() => import('../pages/settings'));
const Faq = lazy(() => import('../pages/faq'));
const Support = lazy(() => import('../pages/support'));

import homeIcon from '../assets/sidebarIcons/homeIcon.svg';
import submitIcon from '../assets/sidebarIcons/submitViolationsIcon.svg';
import whiltelistIcon from '../assets/sidebarIcons/whitelistIcon.svg';
import billingIcon from '../assets/sidebarIcons/billingIcon.svg';
import affiliateIcon from '../assets/sidebarIcons/affiliateIcon.svg';
import settingsIcon from '../assets/sidebarIcons/settingsIcon.svg';
import faqIcon from '../assets/sidebarIcons/faqIcon.svg';
import supportIcon from '../assets/sidebarIcons/supportIcon.svg';

const coreRoutes = [
  {
    path: '/',
    icon: homeIcon,
    title: 'Home',
    component: Home,
  },
  {
    path: '/submitViolations',
    icon: submitIcon,
    title: 'Submit Violations',
    component: SubmitViolations,
  },
  {
    path: '/whitelist',
    icon: whiltelistIcon,
    title: 'Whitelist',
    component: Whitelist,
  },
  {
    path: '/billing',
    icon: billingIcon,
    title: 'Billing',
    component: Billing,
  },
  {
    path: '/affiliateProgram',
    icon: affiliateIcon,
    title: 'Affiliate Program',
    component: Affiliate,
  },
  {
    path: '/settings',
    icon: settingsIcon,
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/faq',
    icon: faqIcon,
    title: 'Faq',
    component: Faq,
  },
  {
    path: '/support',
    icon: supportIcon,
    title: 'Support',
    component: Support,
  },
];

export default coreRoutes;
