import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter"
export default class extends Controller {
  static targets = ["toggle"]

  connect() {
    console.log("Hello from the filter controller")
    this.activeLanguages = new Set()
    this.filterProjects()
  }

  toggleLanguage(event) {
    const toggle = event.currentTarget
    const language = toggle.getAttribute('data-language')
    const isActive = toggle.classList.toggle("active")

    if (isActive) {
      this.activeLanguages.add(language)
    } else {
      this.activeLanguages.delete(language)
    }

    this.filterProjects()
  }

  filterProjects() {
    const projects = document.querySelectorAll('.project-card')

    projects.forEach(project => {
      const projectLanguages = project.getAttribute('data-languages').split(' ')
      const showProject = this.activeLanguages.size === 0 || [...this.activeLanguages].every(lang => projectLanguages.includes(lang))
      project.style.display = showProject ? 'block' : 'none'
    })
  }
}
