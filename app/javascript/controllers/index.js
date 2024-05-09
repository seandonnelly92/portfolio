// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import ScrollerController from "scroller_controller"
import FilterController from "./filter_controller"

// Register individual controllers
application.register("scroller", ScrollerController)
application.register("filter", FilterController)
