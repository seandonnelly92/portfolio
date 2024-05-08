import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter"
export default class extends Controller {
  static targets = ["toggle"]

  connect() {
    this.activeLanguages = new Set()
    this.filterProjects()
  }

  toggleLanguage(event) {
    const language = event.target.getAttribute('data-language')
    if (event.target.checked) {
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
