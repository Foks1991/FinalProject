import '../css/style.less'

import {viewSlider} from './slider/controller'
import {viewMenu} from './dropDown/controller'
import {viewModals} from './modals/controller'
import {viewPagination} from './pagination/controller'

import Model from "./model";
import Controller from "./controller";
import View from "./view";

function init() {
    viewSlider();
    viewMenu();
    viewModals();
    viewPagination();
    const view = new View();
    const model = new Model();
    const controller = new Controller(model, view);
    controller.init();
}

init();
