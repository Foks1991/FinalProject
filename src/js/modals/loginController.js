import model from "./model";
import view from "./view";

export default {
    errorMsg(text) {
        model.errorModal.style.display = "flex";
        model.errorBlock.innerText = text;
    },
    isUserInStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === model.loginInput.value) {
                return model.loginInput.value;
            }
        }
    },
    checkPassword(key){
        return localStorage.getItem(key)
    },
    clearInputs(){
        model.loginInput.value = "";
        model.passwordInput.value = "";
    },
    successForm(text) {
        model.loginForm.style.display = "none";
        model.errorModal.style.display = "none";
        model.successForm.style.display = "block";
        model.successMsg.innerText = text;
        setTimeout(() => {
            model.successForm.style.display = "none";
            view.overlayOff();
        }, 2500)
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
    loginUser() {
        model.loginBtn.addEventListener("click", () => {
            if (model.loginInput.value === "" || model.passwordInput.value === "") {
                this.errorMsg(model.emptyError);
                return
            }
            if (this.isUserInStorage() && this.checkPassword(this.isUserInStorage()) === model.passwordInput.value) {
                this.successForm(model.successLogin);
                this.clearInputs();
            }else{
                this.errorMsg(model.incorrectError)
            }
        })
    }
}