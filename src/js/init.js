import {viewSlider} from './slider/controller'
import {viewMenu} from './dropDown/controller'
import {viewModals} from './modals/controller'

import Model from "./model";
import Controller from "./controller";
import View from "./view";

function init() {
    viewSlider();
    viewMenu();
    viewModals();
    const view = new View();
    const model = new Model();
    const controller = new Controller(model, view);
    controller.init();
}

init();
