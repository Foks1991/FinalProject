class Model {
    constructor(){
        this.dishesObj = {};
        this.dishesKeys = ["pizzas", "sushi", "barbecue", "khachapuri"];
    }

    addDish(obj, key, value) {
        obj[key] = value;
    }
    getDishes (){
        return this.dishesObj;
    }
    getDishesKeys (){
        return this.dishesKeys;
    }
    clearDishes () {
        for (let key in this.dishesObj) {
            if (this.dishesObj.hasOwnProperty(key)) {
                delete this.dishesObj[key]
            }
        }
    }

}

export default Model;

