import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    // connects to bootstrap's jquery element
    $(this.element).toast("show")
  }
}
