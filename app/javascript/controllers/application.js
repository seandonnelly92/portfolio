import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }


import ScrollerController from "/assets/controllers/scroller_controller.js"
Stimulus.register("change-active-menu-item", ScrollerController)
