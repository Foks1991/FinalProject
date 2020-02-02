class Controller{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    init(){
        const getDishesFromServer = () => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "/dishes", true);
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    this.model.setDishesArr(JSON.parse(xhr.response));
                    drawList(this.model.getDishesArr());
                }
            };
        };

        const getDishesByType = (arr, dishesType) => {
            const filteredArray = arr.filter( (e) => {
                return e.type === dishesType;
            });
            this.model.setFilteredArr(filteredArray);
            return this.model.getFilteredArr();
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
                        this.model.setFilteredArr(this.model.getDishesArr());
                    } else {
                        this.view.drawDishes(getDishesByType(dishesList, dishId));
                    }
                    const sortMenu = document.getElementById("dropbtn");
                    sortMenu.style.display = 'block';
                    const height = screen.height;
                    window.scrollTo(0, height - 150);
                })
            }
        };

        const sortDishes = (sortType, sortText) =>{
            this.view.clearDishContainer();
            const sortMenu = document.getElementById("dropbtn");
            switch (sortType) {
                case "priceSort":
                    this.view.drawDishes(this.model.getFilteredArr().sort((a, b) => a.price - b.price));
                    sortMenu.innerText = sortText;
                    break;
                case "priceSortReverse":
                    this.view.drawDishes(this.model.getFilteredArr().sort((a, b) => a.price - b.price).reverse());
                    sortMenu.innerText = sortText;
                    break;
                case "alphaSort":
                    this.view.drawDishes(this.model.getFilteredArr().sort((a, b) => {
                        const nameA = a.name.toUpperCase();
                        const nameB = b.name.toUpperCase();
                        if (nameA < nameB) {return -1}
                        if (nameA > nameB) {return 1}
                    }));
                    sortMenu.innerText = sortText;
                    break;
                case "alphaSortReverse":
                    this.view.drawDishes(this.model.getFilteredArr().sort((a, b) => {
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
        getDishesFromServer();
        this.view.toggleSortMenu();
    }
}

export default Controller;
