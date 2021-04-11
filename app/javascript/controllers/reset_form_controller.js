import { Controller } from "stimulus"

// reset clears the selected element -- tie to an element with:
// data: {controller: "reset-form", action: "turbo:submit-end->reset-form#reset"}
export default class extends Controller {
  reset() {
    this.element.reset()
  }
}
