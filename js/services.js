/**
 * Initialise la navigation mobile.
 * @function
 * @global
 */
export function initMobileNav() {
  /**
   * Bouton de bascule du menu.
   * @type {HTMLElement}
   */
  const btn = document.querySelector('#menu-toggler');

  /**
   * Navigation mobile.
   * @type {HTMLElement}
   */
  const nav = document.querySelector('nav');

  /**
   * Nom de la classe pour indiquer que le menu est ouvert.
   * @type {string}
   */
  const openClassName = 'active';

  /**
   * Ferme la navigation.
   * @function
   */
  const closeNav = () => {
    nav.classList.remove('open');
    btn.classList.remove(openClassName);
    btn.setAttribute('aria-expanded', 'false');
  };

  /**
   * Ferme le panneau de navigation lorsqu'un lien est cliqué.
   * @function
   * @param {MouseEvent} e - Objet d'événement de clic.
   */
  nav.addEventListener('click', (e) => {
    /**
     * Indique si le menu est ouvert.
     * @type {boolean}
     */
    const isOpen = nav.classList.contains('open');

    /**
     * Indique si l'élément cliqué est un lien.
     * @type {boolean}
     */
    const isLink = e.target.tagName === 'A';

    if (isOpen && isLink) {
      closeNav();
    }
  });

  /**
   * Gère l'événement de clic sur le bouton.
   * @function
   */
  btn.addEventListener('click', () => {
    // Bascule de la classe
    btn.classList.toggle(openClassName);

    /**
     * Indique si le bouton est étendu.
     * @type {boolean}
     */
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    // Bascule de l'attribut aria
    btn.setAttribute('aria-expanded', String(!expanded));

    // Ajoute/supprime la classe active
    nav.classList.toggle('open');
  });

  /**
   * Gère l'événement de redimensionnement de la fenêtre.
   * @function
   */
  window.addEventListener('resize', () => {
    /**
     * Élément du menu actuellement ouvert.
     * @type {HTMLElement}
     */
    const menuToogler = document.querySelector(`.${openClassName}`);

    if (menuToogler) {
      closeNav();
    }
  });
}

/**
 * Initialise le positionnement de l'élément spice en fonction de la position de l'élément DOM.
 * @param {HTMLElement} element - L'élément DOM par rapport auquel le spice doit être positionné.
 * @param {number} [offset=190] - La valeur de décalage par rapport à la position de l'élément.
 */
export function initSpiceElement(element, offset = 190) {
  if (!element) {
    console.error("L'élément DOM spécifié est indéfini.");
    return;
  }

  /**
   * Positionne l'élément spice à gauche en fonction de la position de l'élément DOM.
   * @param {HTMLElement} element - L'élément DOM par rapport auquel le spice doit être positionné.
   */
  const setSpiceElementLeftPosition = (element) => {
    const root = document.querySelector(':root');
    const testiminyElementLeft = element.getClientRects()[0].left;
    root.style.setProperty('--spice-left', `${testiminyElementLeft - offset}px`);
  };

  // Initialise la position initiale de l'élément spice.
  setSpiceElementLeftPosition(element);

  // Réajuste la position de l'élément spice lors du redimensionnement de la fenêtre.
  window.addEventListener('resize', () => {
    setSpiceElementLeftPosition(element);
  });
}

/**
 * Initialise l'interaction des cartes de témoignage.
 * @function
 */
export function initTestimonyCards() {
  /**
   * Conteneur des cartes de témoignage.
   * @type {HTMLElement}
   */
  const cardsContainer = document.getElementById('testimony-cards');

  /**
   * Carte de témoignage de petite taille.
   * @type {HTMLElement}
   */
  const cardSmall = document.querySelector('.card-small');

  /**
   * Bascule la classe 'hovered' sur un élément.
   * @param {HTMLElement} element - L'élément sur lequel basculer la classe.
   */
  const toggleClass = (element) => {
    element.classList.toggle('hovered');
  };

  /**
   * Gère l'événement lorsque la souris survole la carte de petite taille.
   * Ajoute ou supprime la classe 'hovered' sur le conteneur des cartes.
   */
  cardSmall.addEventListener('mouseover', function () {
    toggleClass(cardsContainer);
  });

  /**
   * Gère l'événement lorsque la souris quitte la carte de petite taille.
   * Ajoute ou supprime la classe 'hovered' sur le conteneur des cartes.
   */
  cardSmall.addEventListener('mouseout', function () {
    toggleClass(cardsContainer);
  });
}
