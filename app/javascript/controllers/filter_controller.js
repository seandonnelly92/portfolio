import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggle"]

  connect() {
    console.log("Hello from the filter controller")
    // Create a new Set to keep track of all active languages (languages that are clicked)
    // Note: Sets only store unique values, duplicates are not allowed
    this.activeLanguages = new Set()
    // Call the filterProjects function to ensure projects are displayed correctly when the page loads
    this.filterProjects()
  }

  // This function is called whenever a language logo is clicked
  toggleLanguage(event) {
    // Get the HTML element that was clicked
    const toggledItem = event.currentTarget
    // Find the value of the data-language attribute on the clicked element e.g. ruby or html
    const toggledLanguage = toggledItem.getAttribute('data-language')
    // Set the active class to toggle on the clicked element the "active" class on the clicked element.
    // This means it adds the active class if it's not there and removes it if it is
    const isActive = toggledItem.classList.toggle("active")
    // If the "active" class was added, put this language in the activeLanguages Set
    if (isActive) {
      // isActive will return true if the active class is already there and false if it is not...
      // If the "active" class was added, add this langauge to the activeLanguages Set
      this.activeLanguages.add(toggledLanguage)
    } else {
      // If the "active" class was removed, take this language out of the activeLanguages Set
      this.activeLanguages.delete(toggledLanguage)
    }
    // Now that we've updated the active languages, call the filterProjects function to update the project display
    this.filterProjects()
  }

  // A function that shows/hides cards depending on which languages are active
  filterProjects() {
    // Get all elements representing project cards
    const projects = document.querySelectorAll('.project-card')
    // Loop through each project
    projects.forEach(project => {
      // Get a list of all languages associated with this project
      const projectLanguages = project.getAttribute('data-languages').split(' ')

      // Determine if this project should be shown:
      // - If no languages are selected (Set is empty), show all projects
      // - Otherwise, only show projects that contain at least one (.some) of the toggeledLanguages
      const showProject = this.activeLanguages.size === 0 || [...this.activeLanguages].some(toggledLang => projectLanguages.includes(toggledLang))

      // If showProject is true, display the project; otherwise, hide it
      project.style.display = showProject ? 'block' : 'none'
    })
  }
}
