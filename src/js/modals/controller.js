import view from "./view";
import login from "./login";

export const viewModals = () =>{

    view.openModal("delivery", "deliver");
    view.closeModal("deliver__close", "deliver");

    view.openModal("call", "callback");
    view.closeModal("callback__close", "callback");

    view.openModal("login", "loginModal");
    view.closeModal("loginModal__close", "loginModal");

    view.closeByOverlay();

    view.callBack();

    login.registerUser();
    login.loginUser();

};