import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    // using Bootstrap's jquery to find the element with `$(this.element)`
    $(this.element).toast("show")
}
