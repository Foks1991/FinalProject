class Model {
    constructor(){
        //this.dishes = [];
        this.dishesObj = {}
    }

    addDishToObj(obj, key, value) {
        obj[key] = value;
    }
    getDishesObj (){
        return this.dishesObj;
    }
    clearDishesObj () {
        for (let key in this.dishesObj) {
            if (this.dishesObj.hasOwnProperty(key)) {
                delete this.dishesObj[key]
            }
        }
    }

    /*addDishes (){
        for (let i = 0; i < arguments.length; i++) {
            this.dishes.push(arguments[i]);
        }
    }
    getDishes (){
        return this.dishes;
    }
    clearDishes () {
        this.dishes = [];
    }*/
}

export default Model;

