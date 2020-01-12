class Model {
    constructor(){
        this.dishes = [];
    }

    addDishes (){
        for (let i = 0; i < arguments.length; i++) {
            this.dishes.push(arguments[i]);
        }
    }

    getDishes (){
        return this.dishes;
    }

    clearDishes () {
        this.dishes = [];
    }
}

export default Model;

