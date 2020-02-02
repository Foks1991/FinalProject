import mainView from "../view";
import model from "./model"
import view from "./view";

export default {
    addToBasket(name, price){
        this.basketConstructor(name, price);
        this.countPriceSum(price);
    },

    order(){
        model.orderBtn.addEventListener("click", () => {
           this.successOrder();
        });
    },

    successOrder() {
        model.basketList.style.visibility = "hidden";
        model.basketList.style.transform = "scale(0)";
        model.successForm.style.display = "flex";
        model.successMsg.innerText = "The operator will call you back within a minute";
        setTimeout(() => {
            model.successForm.style.display = "none";
            view.overlayOff();
        }, 2500)
    },

     countPriceSum(price){
        model.orderSum.innerText = model.summaryPrice === undefined ? model.summaryPrice = price : model.summaryPrice += price;
     },

    clearOrder() {
        model.clearOrder.addEventListener("click", () => {
            const orderList = document.getElementsByClassName("order");
            for (let i = orderList.length - 1; i >= 0; i--) {
                orderList[i].remove();
            }
            model.summaryPrice = undefined;
            model.orderSum.innerText = "";
        })
    },

    basketConstructor (name, price) {
        const orderName = mainView.createElem({tag: "span", className: "order__name"});
        const orderPrice = mainView.createElem({tag: "span", className: "order__price"});
        const countMinus = mainView.createElem({tag: "span", className: "count__minus"});
        const countCount = mainView.createElem({tag: "span", className: "count__count"});
        const countPlus = mainView.createElem({tag: "span", className: "count__plus"});
        const orderCount = mainView.createElem({tag: "div", className: "count", inner: [countMinus, countCount, countPlus]});

        countPlus.addEventListener('click', (e) => {
            const elem = e.target;
            let count = Number(elem.previousSibling.innerText);
            count+=1;
            elem.previousSibling.innerText = count;
            elem.parentNode.nextSibling.innerText = Number(elem.parentNode.nextSibling.textContent) + price;
            model.orderSum.innerText = Number(model.orderSum.innerText) + price
        });
        countMinus.addEventListener('click', (e) => {
            const elem = e.target;
            let count = Number(elem.nextSibling.innerText);
            if(count > 1){
                count-=1;
                elem.nextSibling.innerText = count;
                elem.parentNode.nextSibling.innerText = Number(elem.parentNode.nextSibling.textContent) - price;
                let tmp = Number(model.orderSum.innerText);
                let result = tmp - price;
                model.orderSum.innerText = String(result);
            }
        });

        countCount.innerText = 1;
        orderName.innerText = name;
        orderPrice.innerText = price;

        const order = mainView.createElem({tag: "div", className: "order", inner : [orderName, orderCount, orderPrice]});
        model.orderWrap.append(order);
    },


}