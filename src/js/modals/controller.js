import view from "./view";
import login from "./loginController";
import basketController from "./basketController";

export const viewModals = () =>{

    view.openModal("delivery", "deliver", "flex");
    view.openModal("call", "callback", "flex");
    view.openModal("login", "loginModal", "flex");
    view.openModal("overBasket", "basketList", "block");

    view.closeModal("deliver__close", "deliver");
    view.closeModal("callback__close", "callback");
    view.closeModal("loginModal__close", "loginModal");
    view.closeByOverlay();

    view.callBack();

    login.loginUser();
    login.registerUser();
    basketController.clearOrder1();

};