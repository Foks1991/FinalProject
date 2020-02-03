class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        const getDishesFromServer = async () => {
            fetch("http://localhost:5000/dishes")
                .then(response => response.json())
                .then(result => this.model.setStorage(result))
                .then(() => drawList(this.model.getStorage()))
                .catch(() => {console.log("Connection error")})
        };

        const getDishesByType = (arr, dishesType) => {
            const filteredArray = arr.filter((e) => {
                return e.type === dishesType;
            });
            this.model.setFilteredStorage(filteredArray);
            return this.model.getFilteredStorage();
        };

        const drawList = (dishesList) => {
            const dishes = document.getElementsByClassName('menu__dishes');
            for (let i = 0; i < dishes.length; i++) {
                dishes[i].addEventListener("click", (e) => {
                    this.view.clearDishContainer();
                    let elem = e.target;
                    let dishId = elem.getAttribute('id');
                    if (dishId === "allDishes") {
                        this.view.drawDishes(dishesList);
                        this.model.setFilteredStorage(this.model.getStorage());
                    } else {
                        this.view.drawDishes(getDishesByType(dishesList, dishId));
                    }
                    this.view.showSortBtn();
                    this.view.scrollToDishes();
                })
            }
        };

        const sortDishes = (sortType, sortText) => {
            this.view.clearDishContainer();
            const sortMenu = document.getElementById("dropbtn");
            switch (sortType) {
                case "priceSort":
                    this.view.drawDishes(this.model.getFilteredStorage().sort((a, b) => a.price - b.price));
                    sortMenu.innerText = sortText;
                    break;
                case "priceSortReverse":
                    this.view.drawDishes(this.model.getFilteredStorage().sort((a, b) => a.price - b.price).reverse());
                    sortMenu.innerText = sortText;
                    break;
                case "alphaSort":
                    this.view.drawDishes(this.model.getFilteredStorage().sort((a, b) => {
                        const nameA = a.name.toUpperCase();
                        const nameB = b.name.toUpperCase();
                        if (nameA < nameB) {return -1}
                        if (nameA > nameB) {return 1}
                    }));
                    sortMenu.innerText = sortText;
                    break;
                case "alphaSortReverse":
                    this.view.drawDishes(this.model.getFilteredStorage().sort((a, b) => {
                        const nameA = a.name.toUpperCase();
                        const nameB = b.name.toUpperCase();
                        if (nameA < nameB) {return -1}
                        if (nameA > nameB) {return 1}
                    }).reverse());
                    sortMenu.innerText = sortText;
            }
        };

        const sortItemsListener = () => {
            const sortMenu = document.getElementsByClassName("sort");
            for (let i = 0; i < sortMenu.length; i++) {
                sortMenu[i].addEventListener("click", (e) => {
                    let elem = e.target;
                    let sortType = elem.getAttribute('id');
                    let sortText = elem.innerText;
                    sortDishes(sortType, sortText);
                })
            }
        };

        sortItemsListener();
        getDishesFromServer().then(() => {});
        this.view.toggleSortMenu();
    }
}

export default Controller;
