import './scss/main.scss'

import {
  initMobileNav,
  initSpiceElement
} from './js/services'

initMobileNav()

const testimonyElement = document.querySelector('#testimony');
initSpiceElement(testimonyElement);