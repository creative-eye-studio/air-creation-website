// assets/controllers/myswup_controller.js

import { Controller } from '@hotwired/stimulus';
<<<<<<< HEAD
=======
import SwupMatomoPlugin from '@swup/matomo-plugin';
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b

export default class extends Controller {
    connect() {
        this.element.addEventListener('swup:pre-connect', this._onPreConnect);
        this.element.addEventListener('swup:connect', this._onConnect);
    }

    disconnect() {
        // You should always remove listeners when the controller is disconnected to avoid side-effects
        this.element.removeEventListener('swup:pre-connect', this._onConnect);
        this.element.removeEventListener('swup:connect', this._onPreConnect);
    }

    _onPreConnect(event) {
        // Swup has not been initialized - options can be changed
        console.log(event.detail.options); // Options that will be used to initialize Swup
    }

    _onConnect(event) {
        // Swup has just been intialized and you can access details from the event
<<<<<<< HEAD
=======
        event.detail.swup.use(new SwupMatomoPlugin());
>>>>>>> 1a15b9c39befc6b3acd191ed526c9da49bb6664b
        console.log(event.detail.swup); // Swup instance
        console.log(event.detail.options); // Options used to initialize Swup
    }
}