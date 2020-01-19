import model from "./model";
import dropdown from "../dropDown/view";

export default {
    isOpenModal: null,

    overlayOn() {
        model.overlay.style.display = "flex";
        model.modalWrap.style.display = "flex";
    },
    overlayOff() {
        model.overlay.style.display = "none";
        model.modalWrap.style.display = "none";
    },
    closeByOverlay() {
        let instance = this;
        model.overlay.addEventListener("click", function () {
            instance.overlayOff();
            const isOpenModal = document.getElementById(`${instance.isOpenModal}`);
            isOpenModal.style.display = "none";
        });
    },

    openModal(listenerId, modalId) {
        const listener = document.getElementById(`${listenerId}`);
        const modal = document.getElementById(`${modalId}`);
        let instance = this;
        listener.addEventListener("click", function () {
            instance.isOpenModal = modalId;
            instance.overlayOn();
            modal.style.display = "flex";
            dropdown.closeDDMenu();
        })
    },
    closeModal(listenerId, modalId) {
        const listener = document.getElementById(`${listenerId}`);
        const modal = document.getElementById(`${modalId}`);
        let instance = this;
        listener.addEventListener("click", function () {
            instance.overlayOff();
            modal.style.display = "none";
        });
    },
    successCallback(){
        let instance = this;
        model.successForm.style.display = "block";
        model.successMsg.innerText = "The operator will call you back within a minute";
        setTimeout(() => {
            model.successForm.style.display = "none";
            instance.overlayOff();
        }, 3000)
    },

    callBack(){
        let instance = this;
        model.callback.addEventListener("click", function () {
            instance.successCallback();
            model.callbackForm.style.display = "none";
        })
    }
}