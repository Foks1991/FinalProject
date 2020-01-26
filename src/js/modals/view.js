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
        model.overlay.addEventListener("click",  () => {
            this.overlayOff();
            const isOpenModal = document.getElementById(`${this.isOpenModal}`);
            isOpenModal.style.display = "none";
        });
    },

    openModal(listenerId, modalId, display) {
        const listener = document.getElementById(`${listenerId}`);
        const modal = document.getElementById(`${modalId}`);
        listener.addEventListener("click", () => {
            this.isOpenModal = modalId;
            this.overlayOn();
            modal.style.display = display;
            dropdown.closeDDMenu();
        })
    },
    closeModal(listenerId, modalId) {
        const listener = document.getElementById(`${listenerId}`);
        const modal = document.getElementById(`${modalId}`);
        listener.addEventListener("click", () => {
            this.overlayOff();
            modal.style.display = "none";
        });
    },

    successCallback() {
        model.successForm.style.display = "block";
        model.successMsg.innerText = "The operator will call you back within a minute";
        setTimeout(() => {
            model.successForm.style.display = "none";
            this.overlayOff();
        }, 2500)
    },
    callBack() {
        model.callbackBtn.addEventListener("click", () => {
            this.successCallback();
            model.callbackForm.style.display = "none";
        })
    }
}