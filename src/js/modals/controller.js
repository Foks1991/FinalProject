import view from "./view";
import login from "./authorizationController";
import basketController from "./basketController";

export const viewModals = () =>{

    view.openModal("delivery", "deliver");
    view.openModal("call", "callback");
    view.openModal("login", "loginModal");
    view.openModal("overBasket", "basketList");

    view.closeModal("deliver__close", "deliver");
    view.closeModal("callback__close", "callback");
    view.closeModal("loginModal__close", "loginModal");
    view.closeByOverlay();

    view.callBack();

    login.loginUser();
    login.registerUser();

    basketController.clearOrder();
    basketController.order();
};