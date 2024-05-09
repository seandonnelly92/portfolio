import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"

// Start Stimulus appliation
const application = Application.start()
// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

eagerLoadControllersFrom("controllers", application)

export { application }
