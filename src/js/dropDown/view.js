import model from "./model";
import controller from "./controller";

export const viewMenu = () => {
    model.kitchenMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        controller.menuWorker(model.kitchensList, model.dishesList, model.dishesArrow, model.kitchenArrow)
    });

    model.dishesMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        controller.menuWorker(model.dishesList, model.kitchensList, model.kitchenArrow, model.dishesArrow)
    });
}
