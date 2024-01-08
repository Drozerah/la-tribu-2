import './scss/main.scss'

import {
  initMobileNav,
  initSpiceElement,
  initTestimonyCards,
  initTestimonyAside
} from './js/services'

initMobileNav()

const testimonyElement = document.querySelector('#testimony');
initSpiceElement(testimonyElement);

initTestimonyCards();

const order = document.getElementById('order')
initTestimonyAside(order);
