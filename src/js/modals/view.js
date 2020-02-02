import model from "./model";
import dropdown from "../dropDown/view";

export default {
    isOpenModal: null,

    overlayOn() {
        model.overlay.style.visibility = "visible";
        model.modalWrap.style.visibility = "visible";
    },
    overlayOff() {
        model.overlay.style.visibility = "hidden";
        model.modalWrap.style.visibility = "hidden";
    },

    openModal(listenerId, modalId) {
        const listener = document.getElementById(`${listenerId}`);
        const modal = document.getElementById(`${modalId}`);
        listener.addEventListener("click", () => {
            this.isOpenModal = modalId;
            this.overlayOn();
            modal.style.visibility = "visible";
            modal.style.transform = "scale(1)";
            dropdown.closeDDMenu();
        })
    },
    closeModal(listenerId, modalId) {
        const listener = document.getElementById(`${listenerId}`);
        const modal = document.getElementById(`${modalId}`);
        listener.addEventListener("click", () => {
            this.overlayOff();
            modal.style.visibility = "hidden";
            modal.style.transform = "scale(0)";
        });
    },
    closeByOverlay() {
        model.overlay.addEventListener("click", () => {
            this.overlayOff();
            const isOpenModal = document.getElementById(`${this.isOpenModal}`);
            isOpenModal.style.visibility = "hidden";
            isOpenModal.style.transform = "scale(0)";
        });
    },

    successCallback() {
        model.successForm.style.display = "flex";
        model.successMsg.innerText = "The operator will call you back within a minute";
        setTimeout(() => {
            model.successForm.style.display = "none";
            this.overlayOff();
        }, 2500)
    },
    callBack() {
        model.callbackBtn.addEventListener("click", () => {
            this.successCallback();
            model.callbackForm.style.visibility = "hidden";
            model.callbackForm.style.transform = "scale(0)";
        })
    }
}