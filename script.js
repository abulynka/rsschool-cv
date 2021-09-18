class CV {
  static instance = null;

  static getInstance() {
    if (CV.instance === null) {
      CV.instance = new CV();
    }
    return CV.instance;
  }

  constructor() {
    this.init();
  }

  init() {
    document.querySelector('.hamburger__button').onclick = () => { CV.getInstance().clickHamburger() };
  }

  clickHamburger() {
    document.querySelector('.header > * > .nav').classList.toggle('nav_hide');
  }
}

CV.getInstance();
