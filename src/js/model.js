class Model {
    constructor(){
        this.dishesArr = [];
        this.filteredArr = [];
    }

    getDishesArr (){return this.dishesArr}
    getFilteredArr (){return this.filteredArr}

    setDishesArr (dishes){this.dishesArr = dishes}
    setFilteredArr (dishes){this.filteredArr = dishes}
}

export default Model;

