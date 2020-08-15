class Navbar {
  constructor() {
    document.addEventListener("DOMContentLoaded", this.handleNavbar);
  }

  handleNavbar = () => {
    const burgers = Array.prototype.slice.call(
      document.querySelector(".navbar-burger"),
      0
    );
    if (burgers.length > 0) {
      // oh boi we got some yummy burgers

      burgers.forEach((borgar) => {
        borgar.addEventListener("click", () => {
          const target = document.getElementById(borgar.dataset.target);
          if (target) {
            // thats him officer, thats the target

            borgar.classList.toggle("is-active");
            target.classList.toggle("is-active");
          }
        });
      });
    }
  };
}

export class Awooing {
  constructor() {
    this.init();
  }

  init() {
    this.initNavbar();
  }

  initNavbar() {
    return new Navbar();
  }
}

export default Awooing
