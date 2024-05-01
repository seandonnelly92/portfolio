import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }


import ScrollerController from "controllers/scroller_controller"
// import ScrollerController from "controllers/scroller_controller.js"
Stimulus.register("scroller-controller", ScrollerController)
