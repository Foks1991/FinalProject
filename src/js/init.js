import {viewSlider} from './slider/view'
import {viewMenu} from './dropDown/view'
import Model from "./model";
import Controller from "./controller";
import View from "./view";

function init() {
    viewSlider();
    viewMenu();
    const view = new View();
    const model = new Model();
    const controller = new Controller(model, view);
    controller.init();
}

init();
