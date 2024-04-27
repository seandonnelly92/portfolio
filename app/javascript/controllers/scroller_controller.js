// scroller_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["section", "menuItem"]

  initialize() {
    this.setActiveSection = this.setActiveSection.bind(this);
    this.setActiveSection();
  }

  connect() {
    console.log("Hello from the scroller controller!")
    window.addEventListener('scroll', this.setActiveSection);
  }

  disconnect() {
    window.removeEventListener('scroll', this.setActiveSection);
  }

  setActiveSection() {
    let currentSection;

    this.sectionTargets.forEach((section) => {
      const sectionTop = section.offsetTop - window.innerHeight + section.offsetHeight;
      if (window.scrollY >= sectionTop) {
        currentSection = section;
      }
    });

    this.menuItemTargets.forEach((link) => {
      link.classList.remove('active');
      if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
        link.classList.add('active');
      }
    });
  }
}
