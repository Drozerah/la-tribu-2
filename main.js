import './scss/main.scss'

import {
  initMobileNav,
  initSpiceElement,
  initTestimonyCards
} from './js/services'

initMobileNav()

const testimonyElement = document.querySelector('#testimony');
initSpiceElement(testimonyElement);

initTestimonyCards()