class Dish {
    constructor(){

    }
    dishes = [];

    addDish (dish){
        this.dishes.push(dish);
    }
    getDishes = () => this.dishes;
    clearDishes = () => this.dishes = [];

}

module.exports = Dish;
