import model from "./model";
import view from "./view";

export const viewMenu = () => {
    model.kitchenMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        view.menuWorker(model.kitchensList, model.dishesList, model.dishesArrow, model.kitchenArrow)
    });

    model.dishesMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        view.menuWorker(model.dishesList, model.kitchensList, model.kitchenArrow, model.dishesArrow)
    });
};