import model from "./model";
import view from "./view";

export default {
    isEmptyInput(loginInput, passInput, errorDiv, errorMsg) {
        if (loginInput.value === "" || passInput.value === "") {
            errorDiv.style.display = "flex";
            errorMsg.innerText = "Field cannot be empty, please try again";
            return true;
        }
    },
    isUserInStorage(loginInput, errorDiv, errorMsg) {
        let users = Object.keys(localStorage);
        for (let key of users) {
            if (loginInput.value === key) {
                errorDiv.style.display = "flex";
                errorMsg.innerText = "User with this login already exists";
                return true;
            }
        }
    },
    successRegister(loginForm, errorDiv, successForm) {
        loginForm.style.display = "none";
        errorDiv.style.display = "none";
        successForm.style.display = "block";
        model.successMsg.innerText = "Your account has been create successfully!";
        setTimeout(() => {
            successForm.style.display = "none";
            view.overlayOff();
        }, 3000)
    },
    registerUser() {
        let instance = this;
        model.registerBtn.addEventListener("click", function () {
            if (instance.isEmptyInput(model.loginInput, model.passwordInput, model.errorDiv, model.errorMsg)) return;
            if (!(instance.isUserInStorage(model.loginInput, model.errorDiv, model.errorMsg))) {
                localStorage.setItem(model.loginInput.value, model.passwordInput.value);
                instance.successRegister(model.loginForm, model.errorDiv, model.successForm)
            }
            model.loginInput.value = "";
            model.passwordInput.value = "";
        })
    },
    loginUser() {
        let instance = this;
        model.loginBtn.addEventListener("click", function () {
            instance.isEmptyInput(model.loginInput, model.passwordInput, model.errorDiv, model.errorMsg);
        })
    }
}