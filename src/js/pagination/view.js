import model from './model'
import mainView from '../view'
import basketController from "../modals/basketController";

export default {

    drawPaginationHeader(paginationHead, day) {
        paginationHead.textContent = day;
    },

    drawPages(records, indexDayToday, recordsPerPage) {
        const pagesWrap = document.getElementById("pages");
        const pageCount = Math.ceil(records.length / recordsPerPage);
        for (let i = 0; i < pageCount; i++) {
            const link = mainView.createElem({tag : "a", className : "page"});
            link.textContent = `${i + 1}`;
            pagesWrap.append(link);

            if (i === indexDayToday - 1) {
                model.currentPageIndex = i;
                link.classList.add('isActivePage');
            }
            if(!indexDayToday && i === 6){
                model.currentPageIndex = i;
                link.classList.add('isActivePage');
            }
        }
    },

    recordConstructor(name, price) {
        const dishName = mainView.createElem({tag : "span", className : "record__name"});
        const dishButton = mainView.createElem({tag : "button", className : "record__button"});
        const dishPrice = mainView.createElem({tag : "span", className : "record__price"});
        dishName.innerText = name;
        dishButton.innerText = "Заказать";

        dishButton.addEventListener("click", (e) => {
            let elem = e.target;
            let parent = elem.parentNode;
            const name = parent.children[0].textContent;
            const price = Number(parent.children[2].textContent);
            basketController.addToBasket(name, price);
        });

        dishPrice.innerText = price;
        return mainView.createElem({tag : "div", className : "record", inner : [dishName, dishButton, dishPrice]});
    },

    drawRecords(recordsArr) {
        const records = document.getElementById("records");
        for (let i = 0; i < recordsArr.length; i++) {
            records.append(this.recordConstructor(recordsArr[i].name, recordsArr[i].price))
        }
    },

    clearContainer() {
        const records = document.getElementById("records");
        records.remove();
        const newRecords = mainView.createElem({tag : "div", className : "pagination__records", id: "records"});
        const pagination = document.getElementById("pagination");
        pagination.append(newRecords);
    },

    clearPages() {
        const pages = document.getElementById("pages");
        pages.remove();
        const newPages = mainView.createElem({tag : "div", className : "pagination__pages", id: "pages"});
        const pagination = document.getElementById("pagination");
        pagination.append(newPages);
    },
}