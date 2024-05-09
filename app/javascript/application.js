import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "@popperjs/core"
import "bootstrap"

// Start Stimulus appliation
const application = Application.start()
// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

eagerLoadControllersFrom("controllers", application)

export { application }
