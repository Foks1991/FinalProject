import model from "./model";
import view from "./view";

export default {
    loginUser() {
        model.loginBtn.addEventListener("click", () => {
            if (model.loginInput.value === "" || model.passwordInput.value === "") {
                this.errorMsg(model.emptyError);
                return
            }
            if (this.isUserInStorage() && this.getUserPassword(this.isUserInStorage()) === model.passwordInput.value) {
                this.successForm(model.successLogin);
                this.clearInputs();
            }else{
                this.errorMsg(model.incorrectError)
            }
        })
    },

    registerUser() {
        model.registerBtn.addEventListener("click", () => {
            if (model.loginInput.value === "" || model.passwordInput.value === "") {
                this.errorMsg(model.emptyError);
                return;
            }
            if (!(this.isUserInStorage(model.loginInput))) {
                localStorage.setItem(model.loginInput.value, model.passwordInput.value);
                this.successForm(model.successRegister)
            } else {
                this.errorMsg(model.existsError);
            }
            this.clearInputs();
        })
    },

    successForm(text) {
        model.loginForm.style.visibility = "hidden";
        model.loginForm.style.transform = "scale(0)";
        model.errorModal.style.display = "none";
        model.successForm.style.display = "block";
        model.successMsg.innerText = text;
        setTimeout(() => {
            model.successForm.style.display = "none";
            view.overlayOff();
        }, 2500)
    },

    isUserInStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === model.loginInput.value) {
                return model.loginInput.value;
            }
        }
    },

    getUserPassword(key){
        return localStorage.getItem(key)
    },

    errorMsg(text) {
        model.errorModal.style.display = "flex";
        model.errorBlock.innerText = text;
    },

    clearInputs(){
        model.loginInput.value = "";
        model.passwordInput.value = "";
    },
}