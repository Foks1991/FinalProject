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
        }, 3000)
    },
    registerUser() {
        let instance = this;
        model.registerBtn.addEventListener("click", function () {
            if (model.loginInput.value === "" || model.passwordInput.value === "") {
                instance.errorMsg(model.emptyError);
                return;
            }
            if (!(instance.isUserInStorage(model.loginInput))) {
                localStorage.setItem(model.loginInput.value, model.passwordInput.value);
                instance.successForm(model.successRegister)
            } else {
                instance.errorMsg(model.existsError);
            }
            instance.clearInputs();
        })
    },
    loginUser() {
        let instance = this;
        model.loginBtn.addEventListener("click", function () {
            if (model.loginInput.value === "" || model.passwordInput.value === "") {
                instance.errorMsg(model.emptyError);
                return
            }
            if (instance.isUserInStorage() && instance.checkPassword(instance.isUserInStorage()) === model.passwordInput.value) {
                instance.successForm(model.successLogin)
                instance.clearInputs();
            }else{
                instance.errorMsg(model.incorrectError)
            }
        })
    }
}