// scroller_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // static targets are the elements that this controller will interact with. The controller will look for elements in the DOM with a data-target that matches
  static targets = ["menuItem", "section"]

  // The connect method runs when the controller is connected to the DOM
  connect() {
    // This console log is just to confirm that the controller has connected successfully
    console.log("Hello from the scroller controller!")
    // this refers to the current method (connect) and when this method fires, fire the next method called checkActiveSection which must be defined later
    this.checkActiveSection();
    // On the 'window' object, add an event listener that listens for 'scroll' events.
    // When a 'scroll' event happens, execute an arrow function.
    // This arrow function calls the 'checkActiveSection' method from this controller (the scroller controller).
    // Bind the 'checkActiveSection' method to the scroll event of the window
    window.addEventListener('scroll', this.checkActiveSection.bind(this));
  }


  // The disconnect method is called when the controller is removed from the DOM
  disconnect() {
    // Remove the scroll event listener from the window to "clean up" when the controller is no long needed. This prevents checkActiveSection trying to fire unnecessarily.
    window.removeEventListener('scroll', this.checkActiveSection.bind(this));
  }

  // The checkActiveSection adds the class 'active' when ...............
  checkActiveSection() {
    // Loop through each 'section' using the targets defined in the controller
    // this = the stimulus controller; sectionTargets = each matching data target
    // index = ................
    this.sectionTargets.forEach((section, index) => {
      // determine the position of the section in the viewport
      // The HTMLElement.offsetTop read-only property returns the distance from the outer border of the current element (including its margin) to the top padding edge of the offsetParent, the closest positioned ancestor element.
      const sectionTop = section.offsetTop
      // offsetHeight is the height of the element as an integer
      const sectionBottom = sectionTop + section.offsetHeight

      // Check if the current scroll position is within the bounds of this section.
      // The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.
      const scrollY = window.scrollY + window.innerHeight / 2; // (Middle of the screen)

      // Find the corresponding menu item for this section
      const menuItem = this.menuItemTargets[index];
      // If the current scroll position is in this section, add the 'active' class to the menu item
      // If scrollY is between sectionTop and section Bottom, addd the class
      if (scrollY >= sectionTop && scrollY <= sectionBottom) {
        menuItem.classList.add('active');
      } else {
        menuItem.classList.remove('active');
      }
    })

  }












  disconnect() {
    window.removeEventListener('scroll', this.checkActiveSection);
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
